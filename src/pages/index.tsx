import Layout from "../layout/index";
import Posts from '../widgets/posts';
import { useState } from "react";
export default function Home() {
  return (
    <Layout>
      <Posts/>
    </Layout>
  );
}
