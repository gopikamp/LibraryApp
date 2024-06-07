import React from 'react'
import NavBar from '../NavBar'

const ViewAllLib = () => {
    return (
        <div>
            <NavBar />
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="row">
                            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Book Title</th>
                                            <th scope="col">Author</th>
                                            <th scope="col">Published Year</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>The Book Of Everlasting Thiings</td>
                                            <td scope="row">Aman</td>
                                            <td>15.01.2023</td>
                                            <td>500</td>
                                        </tr>
                                        <tr>
                                            <td>The Lion King</td>
                                            <td scope="row">Ivaan</td>
                                            <td>24.02.2023</td>
                                            <td>600</td>
                                        </tr>
                                        <tr>
                                            <td>Beauty and The Beast</td>
                                            <td scope="row">Kabir</td>
                                            <td>12.05.2023</td>
                                            <td>660</td>
                                        </tr>
                                        <tr>
                                            <td>Narnia</td>
                                            <td scope="row">Nimah</td>
                                            <td>15.06.2023</td>
                                            <td>900</td>
                                        </tr>
                                        <tr>
                                            <td>It Ends With Us</td>
                                            <td scope="row">Flynn</td>
                                            <td>07.09.2023</td>
                                            <td>500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ViewAllLib