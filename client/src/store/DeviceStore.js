import { makeAutoObservable } from "mobx"
export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: "Смартфоны" },
            { id: 2, name: "Холодидьники" }
        ]
        this._brands = [
            { id: 1, name: "Apple" },
            { id: 2, name: "Xiaomi" }
        ]
        this._devices = [
            { id: 1, name: "Iphone 12 pro", price: 3200, rating: 5, img: "https://htstatic.imgsmail.ru/pic_original/19d6af10c5bba0541758647c9e75d96b/1918903/" },
            { id: 1, name: "Iphone 12 pro", price: 3200, rating: 5, img: "https://htstatic.imgsmail.ru/pic_original/19d6af10c5bba0541758647c9e75d96b/1918903/" },
            { id: 1, name: "Iphone 12 pro", price: 3200, rating: 5, img: "https://htstatic.imgsmail.ru/pic_original/19d6af10c5bba0541758647c9e75d96b/1918903/" },
            { id: 1, name: "Iphone 12 pro", price: 3200, rating: 5, img: "https://htstatic.imgsmail.ru/pic_original/19d6af10c5bba0541758647c9e75d96b/1918903/" },
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevice(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}