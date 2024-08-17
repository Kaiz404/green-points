'use client';

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation';

function MobileNavLinks() {

    const links = [
        { name: 'Home', 
          href: '/'
        },
        {
          name: 'History',
          href: '/courses',
        },
      ];

    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`${pathname === link.href ? 'block py-2 px-3 text-white bg-blue-700 rounded' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700'}`}
            >
              <li>{link.name}</li>
            </Link>
          );
        })}
      </>
    );
  }