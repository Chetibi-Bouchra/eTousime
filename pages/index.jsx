import Head from "next/head";
import SignUpPage from "./signup";
import Menu from "@/components/menu";
import axios from "axios";
import { API_URL } from "@/config/api";

export default function Home() {

  

  return (
    <div >
        <SignUpPage></SignUpPage>
      </div>
    
  );
}
