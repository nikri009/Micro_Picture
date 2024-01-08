import BackCard from '../assets/img/gambarCard.png' //  path sesuai struktur dimna img berada

const ArticleCard = () => {
  const cardStyle = {
    backgroundImage: `url(${BackCard})`, // menggunakan require untuk path gambar
    backgroundSize: 'cover',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className='flex border-black min-w-2/3 ' style={cardStyle}>
      <div className="grid content-end mx-3 my-3 ">
        <div className="flex w-48 h-8 bg-red-600 justify-center  items-center rounded-md mb-1">
            <b>SENIN, 03 JAN 2023</b>
        </div>
        <p className="text-2xl"><b>KPU TETAPKAN 3 MENTOR TERBAIK</b><br/> Super Admin</p>
      </div>
    </div>
  );
};

export default ArticleCard;