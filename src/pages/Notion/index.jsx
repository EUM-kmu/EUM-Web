import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion";

const Notion = () => {
  const [recordMap, setRecordMap] = useState(null);

  useEffect(() => {
    const NOTION_PAGE_ID = "067dd719a912471ea9a3ac10710e7fdf";
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setRecordMap(resJson);
        console.log(resJson);
      });
  }, []);

  return !recordMap ? (
    <div>Loading...</div>
  ) : (
    <>
      <NotionRenderer blockMap={recordMap} fullPage={true} />
    </>
  );
};

export default Notion;
