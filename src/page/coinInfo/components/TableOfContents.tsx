import React from 'react';

interface TocItem {
    id: string;
    label: string;
}

interface Props {
    activeId: string;
    items: TocItem[];
}

const TableOfContents: React.FC<Props> = ({ activeId, items }) => {
    return (
        <nav className="toc-horizontal">
            {items.map(({ id, label }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className={`toc-link ${activeId === id ? 'active' : ''}`}
                >
                    {label}
                </a>
            ))}
        </nav>
    );
};

export default TableOfContents;
