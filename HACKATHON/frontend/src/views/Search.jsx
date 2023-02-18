import SearchInput from "../components/SearchInput";
import Navbar from "../components/Navbar";
import Selector from "../components/Selector";
import { getAllUsers } from "../auth/authService";
import { getAllPreferences } from "../auth/packageService";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
function Search() {
  const [first, setFirst] = useState(true);
  const [filter, setFilter] = useState({
    light: "NA",
    sleep: "NA",
    organization: "NA",
    guests: "NA",
    responsibility: "NA",
    communication: "NA",
    cleanliness: "NA",
    temperature: "NA",
    study: "NA",
    quietness: "NA",
    status: "NA",
    smoking: "NA",
    description: "NA",
  });
  const prefs = [
    "light",
    "sleep",
    "organization",
    "guests",
    "responsibility",
    "communication",
    "cleanliness",
    "temperature",
    "study",
    "quietness",
    "responsibility",
    "status",
    "smoking",
  ];
  const [allUsers, setUser] = useState([]);
  const [allPreferences, setallPreferences] = useState([]);
  const [filteredData, setFilteredData] = useState("");

  function updateData(newText) {
    setFilteredData(newText);
  }

  useEffect(() => {
    render();
  }, [first]);
  // console.log(allUsers);
  // console.log(allPreferences);
  async function render() {
    const users = await getAllUsers();
    const prefs = await getAllPreferences();

    setUser(users);
    setallPreferences(prefs);
  }
  function getUsersPreferences(userId) {
    return allPreferences.filter((eachPref) => eachPref.user === userId);
  }
  function returnPref(pref, type) {
    if (pref === null || pref === undefined) {
      return "";
    } else if (pref.hasOwnProperty(type)) {
      if (type === "description") {
        return pref.description;
      } else if (type === "light") {
        return pref.light;
      } else if (type === "sleep") {
        return pref.sleep;
      } else if (type === "organization") {
        return pref.organization;
      } else if (type === "responsibility") {
        return pref.responsibility;
      } else if (type === "cleanliness") {
        return pref.cleanliness;
      } else if (type === "communication") {
        return pref.communication;
      } else if (type === "temperature") {
        return pref.temperature;
      } else if (type === "guests") {
        return pref.guests;
      } else if (type === "study") {
        return pref.study;
      } else if (type === "status") {
        return pref.status;
      } else if (type === "smoking") {
        return pref.smoking;
      } else if (type === "quietness") {
        return pref.quietness;
      }
    } else {
      return "";
    }
  }
  function reset() {
    setFirst(true);
  }
  function filterAdvanced(name, value) {
    setFirst(false);
    setFilter((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <div className="">
      <Navbar />
      <div className=" grid grid-cols-4 gap-4">
        <div className="mt-5 col-span-1">
          {/* <FilterList /> */}
          {prefs.map((pref) => {
            return <Selector name={pref} filterAdvanced={filterAdvanced} />;
          })}
          <Link to="/search">
            <button>Reset</button>
          </Link>
        </div>
        <div className="col-span-3">
          <SearchInput updateData={updateData} />
          {allUsers
            .filter((user) => {
              return (
                user.phoneNumber.includes(filteredData) ||
                user.name
                  .toLowerCase()
                  .includes(filteredData.toLocaleLowerCase())
              );
            })
            .map((user) => {
              console.log(user);
              const userId = user._id;
              const pref = getUsersPreferences(userId)[0];
              const description = returnPref(pref, "description");
              const responsibility = returnPref(pref, "responsibility");
              const organization = returnPref(pref, "organization");
              const communication = returnPref(pref, "communication");
              const light = returnPref(pref, "light");
              const temperature = returnPref(pref, "temperature");
              const guests = returnPref(pref, "guests");
              const study = returnPref(pref, "study");
              const quietness = returnPref(pref, "quietness");
              const status = returnPref(pref, "status");
              const cleanliness = returnPref(pref, "cleanliness");
              const sleep = returnPref(pref, "sleep");
              const smoking = returnPref(pref, "smoking");
              console.log(pref);
              console.log("hererererer");
              console.log(light);

              return (
                <div class="p-1">
                  {!first ? (
                    light === filter.light ||
                    sleep === filter.sleep ||
                    responsibility === filter.responsibility ||
                    cleanliness === filter.cleanliness ||
                    organization === filter.organization ||
                    communication === filter.communication ||
                    temperature === filter.temperature ||
                    guests === filter.guests ||
                    study === filter.study ||
                    status === filter.status ||
                    quietness === filter.quietness ||
                    smoking === filter.smoking ? (
                      <Card
                        name={user.name}
                        number={user.phoneNumber}
                        description={description}
                        responsibility={responsibility}
                        organization={organization}
                        communication={communication}
                        light={light}
                        temperature={temperature}
                        guests={guests}
                        study={study}
                        quietness={quietness}
                        status={status}
                        cleanliness={cleanliness}
                        sleep={sleep}
                        smoking={smoking}
                      />
                    ) : (
                      <p></p>
                    )
                  ) : (
                    <Card
                      name={user.name}
                      number={user.phoneNumber}
                      description={description}
                      responsibility={responsibility}
                      organization={organization}
                      communication={communication}
                      light={light}
                      temperature={temperature}
                      guests={guests}
                      study={study}
                      quietness={quietness}
                      status={status}
                      cleanliness={cleanliness}
                      sleep={sleep}
                      smoking={smoking}
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default Search;
