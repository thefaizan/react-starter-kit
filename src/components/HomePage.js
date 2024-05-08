// src/components/HomePage.js

import React, { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import pageMeta from '../config/pageMeta';

function HomePage() {

    useDocumentTitle(pageMeta.HomePage.title);  // Set the page title

    return (
        <div>Hello World</div>
    );
}

export default HomePage;