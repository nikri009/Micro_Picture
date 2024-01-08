

const FooterDown: React.FC = () => {
    return(
        <div className=" items-center bg-black h-72 text-white w-full">
            <div className=" flex h-3/4 items-center w-full">
            <img src="/src/assets/img/dumbways.png" alt="" className="h-20 mr-4 ml-20"/>
                <div className="w-80">
                    <b>DUMBWAYS.ID</b>
                    <p>Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                </div>
            </div>
            <hr />
            <div className="flex justify-center w-full h-1/4 text-center items-center " >
                <p>Komisi Pemilihan Umum DumbWays.ID | yourname 2023</p>
            </div>
        </div>
    )
};
export default FooterDown;