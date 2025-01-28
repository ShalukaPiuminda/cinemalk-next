import Link from 'next/link';
import React from 'react';

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} aria-label={title}>
        <div className="flex items-center gap-2 font-semibold hover:text-red-600 transition-all">
          {/* Icon for smaller screens */}
          <Icon className="text-2xl sm:hidden" />
          {/* Title for larger screens */}
          <p className="uppercase hidden sm:inline text-sm">{title}</p>
        </div>
      </Link>
    </div>
  );
}
