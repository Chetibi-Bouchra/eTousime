import Head from "next/head";
import SignUpPage from "./signup";
import Menu from "@/components/menu";
import axios from "axios";
import { API_URL } from "@/config/api";
import HomePage from "./home";

export default function Home() {
  return (
    <div >
        <HomePage></HomePage>
      </div>
    
  );
}
