import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import UserProfilePage from "./pages/UserProfilePage";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";
import ComposePostPage from "./pages/ComposePostPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import UserDirectoryPage from "./pages/UserDirectoryPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/users" element={<UserDirectoryPage />} />
        <Route path="/user/:id" element={<UserProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/compose" element={<ComposePostPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
