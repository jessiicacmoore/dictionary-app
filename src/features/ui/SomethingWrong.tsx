function SomeThingWrong({ message }: { message: string }) {
  return (
    <div className="mx-auto max-w-[400px] text-center">
      <h2 className="mb-4 text-4xl font-extrabold sm:text-7xl">Oh No!</h2>
      <p className="text-bold text-xl text-gray-300">{message}</p>
    </div>
  );
}

export default SomeThingWrong;
