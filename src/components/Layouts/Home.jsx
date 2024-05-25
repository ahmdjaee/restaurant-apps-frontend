import { createContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import OvalButton from "../Elements/Button/OvalButton"
import CardCustomer from "../Fragments/Card/CardCustomer"
import CardMenuOval from "../Fragments/Card/CardMenuOval"
import Footer from "../Fragments/Footer"
import BookingForm from "../Fragments/Form/BookingForm"
import Modal from "../Fragments/Modal/Modal"
import Check from "./../../assets/check.svg"
import Chef from "./../../assets/chef-1.svg"
import Facebook from "./../../assets/facebook.svg"
import HeroImage from "./../../assets/hero.svg"
import HeroImage2 from "./../../assets/hero2.svg"
import Instagram from "./../../assets/instagram.svg"
import Twitter from "./../../assets/twitter.svg"
import { getTable } from "../../services/TableService"

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState([]);
    const controller = new AbortController();

    async function fetchTable() {
        const response = await getTable(controller)

        if (response.data) {
            setData(response.data)
        }
    }
    return (
        <>
            <Modal onKeyDown={() => setShowModal(false)} showModal={showModal} >
                <BookingForm tables={data} onCancel={() => setShowModal(false)} />
            </Modal>

            <section className="container justify-between flex items-center pt-8 pb-16">
                <div className="w-2/5 animate-left-slide-in">
                    <h1 className="text-5xl font-semibold">We provide the best food for you</h1>
                    <p className="text-base my-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to={"/menus"}><OvalButton text="Menu" type="dark" style="me-5" /></Link>

                    <OvalButton text="Book A table" onClick={() => {
                        setShowModal(true)
                        fetchTable()
                    }} />
                    <div className="flex gap-4 mt-20">
                        <img src={Facebook} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Twitter} alt="" />
                    </div>
                </div>
                <img
                    className="w-2/4 min-h-[36rem] animate-right-slide-in"
                    src={HeroImage}
                    alt=""
                />
            </section>

            <section className="bg-gray-200 py-12 text-center">
                <div className="container">
                    <h1 className="text-5xl font-semibold my-5">Our Special Dishes</h1>
                    <p className="w-1/2 mx-auto mb-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, ratione! Atque consectetur blanditiis molestias. Accusantium rerum at sed fuga mollitia.</p>

                    <div className="flex justify-center gap-7">
                        <CardMenuOval />
                        <CardMenuOval />
                        <CardMenuOval />
                        <CardMenuOval />
                    </div>

                    <div className="flex mt-20 container text-start items-center">
                        <img className="w-2/4 animate-spin-slow " src={HeroImage2} alt="" />
                        <div className="ms-24">
                            <h1 className="text-5xl font-semibold">Wecome to Our Restaurant</h1>
                            <p className="text-base my-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <OvalButton text="Menu" type="dark" style="me-5" />
                            <OvalButton text="Book A table" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex container items-center py-12 gap-5">
                <div>
                    <h1 className="text-5xl font-semibold">Our Expects Chef</h1>
                    <p className="text-base my-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                        <div className="flex gap-3 items-start">
                            <img className="py-2" src={Check} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore</p>
                        </div>
                        <div className="flex gap-3 items-start">
                            <img className="py-2" src={Check} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore</p>
                        </div>
                        <div className="flex gap-3 items-start">
                            <img className="py-2" src={Check} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore</p>
                        </div>
                        <div className="flex gap-3 items-start">
                            <img className="py-2" src={Check} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore</p>
                        </div>
                        <div className="flex gap-3 items-start">
                            <img className="py-2" src={Check} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore</p>
                        </div>
                        <div className="flex gap-3 items-start">
                            <img className="py-2" src={Check} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore</p>
                        </div>
                    </div>
                </div>
                <img className="w-2/5 " src={Chef} alt="" />
            </section>

            <section className="bg-gray-200 py-12 text-center">
                <div className="container">
                    <h1 className="text-5xl font-semibold">Our Happy Customers</h1>
                    <p className="text-base my-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <div className="flex justify-center  gap-7">
                        <CardCustomer />
                        <CardCustomer />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )

}

export default Home