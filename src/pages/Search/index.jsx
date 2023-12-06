import searchIcon from "../../assets/search_icon.svg";
import removeIcon from "../../assets/remove_icon.svg";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import seoulDistrictsData from "../../data/seoulDistrictsData.json";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const filteredData = Object.entries(seoulDistrictsData).reduce(
    (acc, [city, districts]) => {
      if (city.includes(searchTerm)) {
        acc[city] = districts;
      } else {
        const filteredDistricts = Object.entries(districts).reduce(
          (acc, [district, dongs]) => {
            if (district.includes(searchTerm)) {
              acc[district] = dongs;
            } else {
              const filteredDongs = dongs.filter((dong) =>
                dong.includes(searchTerm)
              );
              if (filteredDongs.length > 0) {
                acc[district] = filteredDongs;
              }
            }
            return acc;
          },
          {}
        );
        if (Object.keys(filteredDistricts).length > 0) {
          acc[city] = filteredDistricts;
        }
      }
      return acc;
    },
    {}
  );

  console.log(seoulDistrictsData);
  console.log(filteredData);

  return (
    <div className="flex flex-col h-screen">
      <BackButton text="마을 변경" />
      <div className="flex p-2 w-full bg-[#f2f2f7] gap-[6px] items-center">
        <img src={searchIcon} />
        <input
          className="flex-1 bg-[#f2f2f7] outline-none text-[#8E8E93]"
          value={searchTerm}
          onChange={searchHandler}
          placeholder="나의 마을(동, 읍, 면) 검색"
        />
        <img
          className="cursor-pointer"
          src={removeIcon}
          onClick={() => {
            setSearchTerm("");
          }}
        />
      </div>

      {searchTerm === "" ? (
        <div className="flex flex-1 justify-center items-center text-center">
          검색 결과가 없어요.
          <br />
          마을 이름을 다시 확인해주세요!
        </div>
      ) : (
        <div className="flex-1">
          <p>&rsquo;{searchTerm}&rsquo; 검색 결과</p>
          <div>검색 결과 보여질 목록</div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
