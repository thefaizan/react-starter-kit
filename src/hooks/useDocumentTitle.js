// src/hooks/useDocumentTitle.js

import { useEffect } from 'react';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);  // Re-run this effect if title changes
}

export default useDocumentTitle;
