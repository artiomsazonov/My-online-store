import { makeAutoObservable } from "mobx"
export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: "Смартфоны" },
            { id: 2, name: "Холодидьники" },
            { id: 3, name: "Ноутбуки" },
            { id: 4, name: "Телевизоры" }
        ]
        this._brands = [
            { id: 1, name: "Apple" },
            { id: 2, name: "Xiaomi" },
            { id: 3, name: "Apple" },
            { id: 4, name: "Xiaomi" },
        ]
        this._devices = [
            { id: 1, name: "Iphone 12 pro", price: 3200, rating: 5, img: "https://htstatic.imgsmail.ru/pic_original/19d6af10c5bba0541758647c9e75d96b/1918903/" },
            { id: 2, name: "Iphone 12 pro", price: 3200, rating: 5, img: "https://htstatic.imgsmail.ru/pic_original/19d6af10c5bba0541758647c9e75d96b/1918903/" },
            { id: 3, name: "Iphone 12 pro", price: 3200, rating: 5, img: "https://htstatic.imgsmail.ru/pic_original/19d6af10c5bba0541758647c9e75d96b/1918903/" },
            { id: 4, name: "Iphone 12 pro", price: 3200, rating: 5, img: "https://htstatic.imgsmail.ru/pic_original/19d6af10c5bba0541758647c9e75d96b/1918903/" },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
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
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}