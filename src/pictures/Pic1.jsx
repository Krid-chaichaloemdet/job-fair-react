export default function Pic1() {
  return (
    <div className="flex gap-[0.5rem] mx-[0.5rem] justify-between">
      <div className="">
        <img
          className="object-scale-down"
          src="images/pic1-1.jpg"
        />
      </div>
      <div>
        <img
          className="object-scale-down"
          src="images/pic1-2.jpg"
        />
      </div>
    </div>
  );
}
