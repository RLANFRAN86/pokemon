import {useState, useEffect} from 'react';

const Paginacion = (props) =>{
    const {page, totalPages, changePage} = props;
    const [currentPage, setCurrentPage] = useState(page);

     useEffect(() => {
       changePage(currentPage);
     }, [currentPage]);

        
    return(
        <div>
            <button onClick={() => setCurrentPage(currentPage-1)}>
                <div>Previous</div>
            </button>
            <div>
                {currentPage+1} de {totalPages}
            </div>
            <button onClick={() => setCurrentPage(currentPage+1)}>
                <div>Next</div>
            </button>
        </div>
    )
}
export default Paginacion;