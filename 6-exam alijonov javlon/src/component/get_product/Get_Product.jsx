import './get_product.scss'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Add from '../add card/Add'

import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../get_product/img/Mask group.png'


const Get_Product = (props) => {
    const [data, setData] = useState([])
    useEffect(async () => {
        try {
            const response = await axios.get('https://64a6fca7096b3f0fcc80ef97.mockapi.io/products')
            const data = response.data
            setData(data)
        } catch (error) {
            alert(error)
        }
    }, [])

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    const itemsPerPage = 10;
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);
    const [searchValue, setSearchValue] = useState('')
    const [optionValue, setOptionValue] = useState()
    const handleDelete = (id) => {
        alert('Do you want to delete......')

        try {
            axios.delete(`https://64a6fca7096b3f0fcc80ef97.mockapi.io/products/${id}`)
                .then(res => console.log(res.data))
        } catch (error) {
            alert(console.error)
        }
        const filteredData = data.filter((data) => data.id != id)
        setData(filteredData)
    }

    const handleEdit = (id) => {
        axios.put(`https://64a6fca7096b3f0fcc80ef97.mockapi.io/products/${id}`)
            .then(res => {
                <Add name={res.data} />
                console.log(res.data);
            })
    }

    const handleValue = (e) => {
        setOptionValue(e.target.value)
        console.log(+optionValue);
    }

    return (
        <div className='get-pro'>
            <div className="navbar">
                <img src={img} alt="" />
                <div className="icon">
                    <div className="icon-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                    </div>
                    <div className="icon-card">
                        <Link to="/profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="icon-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="header-top">
                <div className="header-card">
                    <div className="text">
                        <h3>Товары</h3>
                        <p>Главная / Товары</p>
                    </div>
                    <button>
                        <Link to="/add">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg>
                            Выйти
                        </Link>
                    </button>
                </div>
                <div className="header-center4">
                    <div className="header-center3">
                        <div className="header-search_bar">
                            <div className="left">

                                <h3>Все товары ({optionValue ? optionValue : 0})</h3>
                            </div>
                            <div className="right_search">
                                <div className="search-box">
                                    {/* <img src={SearchLogo} alt="search-logo" className='search-logo' /> */}
                                </div>
                                <div className="input">
                                    <input type="search" name="search" placeholder='Поиск' id="search" onChange={(e) => setSearchValue(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="main-nav">
                            <table>
                                <tr>
                                    <th><input type="checkbox" checked /></th>
                                    <th>Наименование</th>
                                    <th>Артикул </th>
                                    <th>Бренд</th>
                                    <th>Цена</th>
                                    <th>Цена со скидкой</th>
                                    <th></th>
                                    <th></th>
                                </tr>

                                {data && currentPageData.sort().slice(0, +optionValue).filter((item) => {
                                    if (searchValue === '') {
                                        return item
                                    } else if (item.madeIn.toLowerCase().includes(searchValue.toLowerCase())) {
                                        return item
                                    }
                                }).map((item) => (
                                    <tr key={item.id}>
                                        <td><input type="checkbox" /></td>
                                        <td>Товар {item.id} </td>
                                        <td>{item.code} </td>
                                        <td>{item.brand} </td>
                                        <td>{item.price}$ </td>
                                        <td>{item.priceInSale}$</td>
                                        <td ><FaEdit onClick={(e) => handleEdit(item.id)} /></td>
                                        <td><MdDelete onClick={(e) => handleDelete(item.id)} /></td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                        <div className="option-and-pagination">
                            <div className="option-box">
                                <select onChange={handleValue}>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                            <div className="wrapper">
                                <div className="pagination">
                                    <button
                                        className={currentPage === 0 ? 'disabled' : 'previous'}
                                        onClick={() => handlePageChange({ selected: currentPage - 1 })}
                                    >

                                    </button>
                                    <ul id='list'>

                                        {[...Array(pageCount)].map((_, index) => (
                                            <li
                                                key={index}
                                                className={currentPage === index ? 'list' : 'active'}
                                                onClick={() => handlePageChange({ selected: index })}

                                            >
                                                {index + 1}
                                            </li>
                                        ))}

                                        {/* Next button */}
                                    </ul>
                                    <button
                                        className={currentPage === pageCount - 1 ? 'disabled' : 'next'}
                                        onClick={() => handlePageChange({ selected: currentPage + 1 })}
                                    >

                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-elements">
                            <div className="left">
                                <button><Link to='/add'>Новый товар</Link></button>
                            </div>
                            <div className="right">
                                <h4>© Anymarket 2022</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Get_Product