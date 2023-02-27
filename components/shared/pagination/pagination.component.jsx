import React from 'react';
import Link from 'next/link';
import * as styles from './pagination.module.css';

function Pagination({ currentPage, totalPages }) {
    const pages = [];
    currentPage = parseInt(currentPage);

    // Adds pages 3 pages before and after the current page to the pages constant.
    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 ||
            i === totalPages ||
            (i >= currentPage - 3 && i <= currentPage + 3)
        ) {
            pages.push(i);
        }
        // Add '...'
        else if (pages[pages.length - 1] !== '...') {
            pages.push('...');
        }
    }

    return (
        <nav className={styles.pagination}>
            <ul className={styles.pagination__wrapper}>
                {/* Previous Button */}
                <li>
                    {/* It does not create a link because there is no page before the 1st page */}
                    {currentPage === 1 ? (
                        <span
                            className={`
                            ${
                                currentPage === totalPages &&
                                styles['pagination__item--disabled']
                            }
                                ${styles['pagination__item--deactivate']}
                                ${styles['pagination__item']}`}
                        >
                            Previous
                        </span>
                    ) : // Redirects to "/users" as the 1st page.
                    currentPage === 2 ? (
                        <Link href={`/users`}>
                            <span
                                className={`
                                        ${styles['pagination__item--deactivate']}
                                        ${styles['pagination__item']}`}
                            >
                                Previous
                            </span>
                        </Link>
                    ) : (
                        <Link href={`/users/page/${currentPage - 1}`}>
                            <span
                                className={`
                                    ${styles['pagination__item--deactivate']}
                                    ${styles['pagination__item']}`}
                            >
                                Previous
                            </span>
                        </Link>
                    )}
                </li>

                {/* Pagination Item */}
                {pages.map((page, index) => (
                    <li key={index}>
                        {/* Adds '...' */}
                        {page === '...' ? (
                            <span
                                className={`${styles['pagination__item--void']} ${styles['pagination__item']}`}
                            >
                                ...
                            </span>
                        ) : page === 1 ? (
                            // Redirects to "/users" as the 1st page.
                            <Link href={`/users`}>
                                <span
                                    className={`${
                                        currentPage === page
                                            ? styles['pagination__item--active']
                                            : styles[
                                                  'pagination__item--deactivate'
                                              ]
                                    } ${styles.pagination__item}`}
                                >
                                    {page}
                                </span>
                            </Link>
                        ) : (
                            // Generates page numbers
                            <Link href={`/users/page/${page}`}>
                                <span
                                    className={`${
                                        currentPage === page
                                            ? styles['pagination__item--active']
                                            : styles[
                                                  'pagination__item--deactivate'
                                              ]
                                    } ${styles.pagination__item}`}
                                >
                                    {page}
                                </span>
                            </Link>
                        )}
                    </li>
                ))}

                {/* Next Button */}
                <li>
                    {/* Doesn't create links after last page */}
                    {currentPage === totalPages ? (
                        <span
                            className={`
                        ${
                            currentPage === totalPages &&
                            styles['pagination__item--disabled']
                        }
                        ${styles['pagination__item--void']} 
                        ${styles['pagination__item']}`}
                        >
                            Next
                        </span>
                    ) : (
                        // Creates a link to the next page
                        <Link href={`/users/page/${currentPage + 1}`}>
                            <span
                                className={`
                                ${
                                    currentPage === totalPages &&
                                    styles['pagination__item--disabled']
                                }
                                ${styles['pagination__item--void']} 
                                ${styles['pagination__item']}`}
                            >
                                Next
                            </span>
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
