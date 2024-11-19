export default function Pic1() {
  return (
    <div className="flex gap-5 mx-[0.5rem] justify-between">
      <div className="">
        <img
        className="h-[525px] w-[800px]  object-cover"
          src="images/pic1-1.jpg"
        />
      </div>
      <div>
        <img
              className="h-[525px] w-[800px]  object-cover"
          src="images/pic1-2.jpg"
        />
      </div>
    </div>
  );
}
