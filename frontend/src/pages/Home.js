import React, {useState, useEffect} from 'react'
import clienteAxios from '../api/clienteAxios'
import Photo from '../components/card/Photo'
import PaginationPoke from "../components/pagination/PaginationPoke";

function Home() {

    const [datax, setDatax] = useState([])
    const [dataPage, setDataPage] = useState([])
    const [page, setPage] = useState(1)

    
    const obtenerApi = async () => {
        const res = await clienteAxios.get(`/productos?page=${page}`)
        setDatax(res.data.docs)
        setDataPage(res.data)
        console.log(dataPage);
    }


    useEffect(() => {
    obtenerApi()
    }, [page])

    const onChangePage = page => {
        setPage(page);
      };


    return (
        <div className='row' >
            <PaginationPoke currentPage={page} totalItems={dataPage.totalDocs} onChangePage={onChangePage} />
            {datax.map((e_pro)=> (
                <Photo  key={e_pro._id} e_pro={e_pro} />
            ))}
        </div>
    )
}

export default Home
