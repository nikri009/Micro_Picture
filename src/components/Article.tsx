
import BackgroundArticle from '../assets/img/BackgroudArticle.png' //  path sesuai struktur dimna img berada

const MyCard = () => {
  const cardStyle = {
    backgroundImage: `url(${BackgroundArticle})`, // menggunakan require untuk path gambar
    backgroundSize: 'cover',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className='sm:flex border-black w-4/5   mt-6 mb-9 rounded-none justify-center' style={cardStyle}>
      <div className=' content-between sm:w-1/2 p-2 '>
        <img src="/src/assets/img/TransDumb.png" alt="" className='w-72  ' />
        <div className='h-1/2'>
         <b className='text-5xl '>SELAMAT DATANG </b> 
          <p className='text-1xl '><b>PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI NAMA</b> </p>
        </div>
      </div>
      <div className='flex justify-center sm:w-1/2'>
        <img src="/src/assets/img/KotakPemilu.png" alt="" className='w-44 h-80'/>
      </div>
    </div>
  );
};

export default MyCard;