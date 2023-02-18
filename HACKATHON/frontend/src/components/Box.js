function Box({ what, info }) {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div class=" border  border-black flex-wrap m-1	w-fit p-1.5">
      <p class="font-normal text-gray-700 dark:text-gray-400 text-sm">
        {what + ": " + info}
      </p>
    </div>
  );
}
export default Box;
