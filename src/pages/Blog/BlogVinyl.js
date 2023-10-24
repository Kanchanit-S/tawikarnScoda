import React from "react";
import dataBlog from "../../data/Blog/blog-data.json";
import dataSocial from "../../data/Social/social-data.json";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleBlog from "../../components/PageTitle/PageTitleBlog";
import SidebarForBlog from "../../components/Sidebar/SidebarForBlog";
import Icofont from "react-icofont";
import CommentsRespond from "../../components/Blog/CommentsRespond";

const BlogStandard = ({ sidebar }) => {
  const postId = new URLSearchParams(window.location.search).get("id");
  const post = dataBlog.find((post) => post.id === parseInt(postId));
  const featuredPost = dataBlog.find((post) => post.id === 1);

  return (
    <Loader>
      <HeaderOne />
        <PageTitleBlog title={'ไวนิล (Vinyl) คืออะไร'}/>
      <section>
        <div className="container">
            <h1>ไวนิลคืออะไร</h1>
            <p style={{ fontSize: '16px'}}>
            ไวนิล คือพลาสติกชนิดพิเศษมีส่วนผสมระหว่างพลาสติกคุณภาพสูงรวมกับสารเพิ่มประสิทธิภาพต่างๆ เช่นสารเพิ่มความทนทานต่อแสงแดด สารเพิ่มความแข็งแรงทนทานต่อแรงกระแทก สารเพิ่มความทนทานต่อสภาวะอากาศ และสารเพิ่มความทนทานความร้อน ไวนิลนอกจากจะทนทานต่อแสงแดดรังสียูวีและสภาวะอากาศที่เปลี่ยนแปลงแล้วยังเป็นวัสดุที่ไม่มีปัญหาเรื่องปลวกหรือแมลงกัดเจาะ การผุกร่อนหรือบิดงอ การเกิดสนิม การรั่วซึมของน้ำฝน ไม่ติดไฟ และยังช่วยลดการสิ้นเปลืองพลังงานอีกด้วย จึงนิยมนำมาใช้ผลิตอุปกรณ์ใช้งานกลางแจ้ง
            </p>
        </div>
      </section>
    </Loader>
  );
};

export default BlogStandard;
