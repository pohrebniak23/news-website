import classNames from 'classnames';
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { AppLink } from '../../AppLink/AppLink';
import styles from './TableOfContents.module.scss';

interface ContentTableSubitem {
  id: string;
  title: string;
}

interface ContentTable {
  id: string;
  title: string;
  items: ContentTableSubitem[];
}

interface HeadingsType {
  headings: ContentTable[];
  activeId: string | undefined;
}

const Headings = ({ headings, activeId }: HeadingsType) => {
  const linkClickHandler = useCallback(
    (event: MouseEvent, heading: ContentTable) => {
      event.preventDefault();

      document.getElementById(`${heading.id}`)?.scrollIntoView({
        behavior: 'smooth',
      });
    },
    [],
  );

  return (
    <ul className={styles.list}>
      {headings.map(
        (heading: ContentTable, index: any) =>
          heading && (
            <li key={index}>
              <AppLink
                to={`#${heading.id}`}
                className={classNames(styles.listLink, {
                  [styles.active]: heading.id === activeId,
                })}
                onClick={(event) => linkClickHandler(event, heading)}
              >
                {heading.title}
              </AppLink>

              {heading.items.length > 0 && (
                <ul className={styles.listChild}>
                  {heading.items.map((child) => (
                    <li key={index}>
                      <AppLink
                        to={`#${child.id}`}
                        className={classNames(styles.listLink, {
                          [styles.active]: heading.id === activeId,
                        })}
                        onClick={(event) => linkClickHandler(event, heading)}
                      >
                        {child.title}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ),
      )}
    </ul>
  );
};

const getNestedHeadings = (headingElements: HTMLElement[]) => {
  const nestedHeadings: ContentTable[] = [];

  headingElements.forEach((heading) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
};

/**
 * Dynamically generates the table of contents list, using any H2s and H3s it can find in the main text
 */
const useHeadingsData = (contentClass: string = 'main') => {
  const [nestedHeadings, setNestedHeadings] = useState<any>([]);

  useEffect(() => {
    const headingElements: HTMLElement[] = Array.from(
      document.querySelectorAll(`${contentClass} h2, ${contentClass} h3`),
    );

    // Created a list of headings, with H3s nested
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, [contentClass]);

  return { nestedHeadings };
};

const useIntersectionObserver = (
  setActiveId: Dispatch<SetStateAction<undefined>>,
) => {
  const headingElementsRef: any = useRef({});

  const headingElements = Array.from(document.querySelectorAll('h2, h3'));

  useEffect(() => {
    const callback = (headings: any) => {
      headingElementsRef.current = headings.reduce(
        (map: any, headingElement: any) => {
          // eslint-disable-next-line no-param-reassign
          map[headingElement.target.id] = headingElement;
          return map;
        },
        headingElementsRef.current,
      );

      // Get all headings that are currently visible on the page
      const visibleHeadings: any[] = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b): any =>
            getIndexFromId(a.target.id) > getIndexFromId(b.target.id),
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      root: document.querySelector('iframe'),
      rootMargin: '500px',
    });

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId, headingElements]);
};

export const TableOfContents = () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData('');
  useIntersectionObserver(setActiveId);

  return <Headings headings={nestedHeadings} activeId={activeId} />;
};
