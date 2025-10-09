
export default function GalleryHeader({bg , title , header,parag}) {
  return (
    <div className=''>
      <h1 className='text-4xl mt-20 mb-2 pl-2'>{title}</h1>
      <div className=" mx-auto px-4  bg-cover bg-center w-full overflow-hidden min-h-[80vh] flex justify-center items-center" style={{backgroundImage:`url(${bg})`}}>
        <div className='text-white text-2xl md:text-4xl text-center'>
            <h2>{header}</h2>
            <h2>{parag}</h2>
        </div>
      </div>
    </div>
  );
}
