import Box from "./Box";
function Card({
  name,
  number,
  description,
  responsibility,
  organization,
  communication,
  light,
  temperature,
  guests,
  study,
  quietness,
  status,
  cleanliness,
  sleep,
  smoking,
}) {
  return (
    <div className="m-auto ">
      <a
        href="#"
        class="block w-fit max-w-3xl mx-auto mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name + "   " + number}
        </h5>
        <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {description}
        </h6>
        <div class="flex flex-wrap">
          {<Box what={"status"} info={status} />}
          {<Box what={"responsibility"} info={responsibility} />}
          {<Box what={"organization"} info={organization} />}
          {<Box what={"communication"} info={communication} />}
          {<Box what={"light"} info={light} />}
          {<Box what={"temperature"} info={temperature} />}
          {<Box what={"guests"} info={guests} />}
          {<Box what={"study"} info={study} />}
          {<Box what={"quietness"} info={quietness} />}
          {<Box what={"cleanliness"} info={cleanliness} />}
          {<Box what={"sleep"} info={sleep} />}
          {<Box what={"smoking"} info={smoking} />}
        </div>
      </a>
    </div>
  );
}
export default Card;
