import Layout from "../layout/index";
import Posts from '../widgets/posts';
import CreatePost from '../widgets/createPost'
import { useState } from "react";
export default function Create() {
  return (
    <Layout>
      <CreatePost/>
    </Layout>
  );
}
