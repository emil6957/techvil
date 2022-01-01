import intel5 from "../Images/Products/CPU/Intel Core i5 11th Gen 6 Core.jpg";
import intel5Second from "../Images/Products/CPU/Intel Core i5 11th Gen 6 Core 2nd.jpg";
import intel7 from "../Images/Products/CPU/Intel Core i7 11th Gen 8 Core.jpg";
import intel7Second from "../Images/Products/CPU/Intel Core i7 11th Gen 8 Core 2nd.jpg";
import intel9 from "../Images/Products/CPU/Intel Core i9 11th Gen 8 Core.jpg";
import intel9Second from "../Images/Products/CPU/Intel Core i9 11th Gen 8 Core 2nd.jpg";
import ryzen7 from "../Images/Products/CPU/AMD Ryzen 7 3800X.jpg";
import ryzen7Second from "../Images/Products/CPU/AMD Ryzen 7 3800X 2nd.jpg";
import ryzen7Third from "../Images/Products/CPU/AMD Ryzen 7 3800X 3rd.jpg";

import gtx1650 from "../Images/Products/GPU/MSI GeForce GTX 1650 Ventus.jpg";
import gtx1650Second from "../Images/Products/GPU/MSI GeForce GTX 1650 Ventus 2nd.jpg";
import gtx1650Third from "../Images/Products/GPU/MSI GeForce GTX 1650 Ventus 3rd.jpg";
import gtx1080Ti from "../Images/Products/GPU/Gigabyte GeForce GTX 1080 Ti.jpg";
import gtx1080TiSecond from "../Images/Products/GPU/Gigabyte GeForce GTX 1080 Ti 2nd.jpg";
import gtx1080TiThird from "../Images/Products/GPU/Gigabyte GeForce GTX 1080 Ti 3rd.jpg";
import rtx3060Ti from "../Images/Products/GPU/MSI GeForce RTX 3060 Ti Ventus.jpg";
import rtx3060TiSecond from "../Images/Products/GPU/MSI GeForce RTX 3060 Ti Ventus 2nd.jpg";
import rtx3060TiThird from "../Images/Products/GPU/MSI GeForce RTX 3060 Ti Ventus 3rd.jpg";

import corsairDDR4 from "../Images/Products/RAM/Corsair Vengeance RGB Black PRO 16GB (2 x 8GB) DDR 3200MHz.jpg";
import corsairDDR4Second from "../Images/Products/RAM/Corsair Vengeance RGB Black PRO 16GB (2 x 8GB) DDR 3200MHz 2nd.jpg";
import corsairDDR4Third from "../Images/Products/RAM/Corsair Vengeance RGB Black PRO 16GB (2 x 8GB) DDR 3200MHz 3rd.jpg";
import crucialDDR4 from "../Images/Products/RAM/Crucial RAM 16GB DDR4 2400MHz Desktop Memory.jpg";
import crucialDDR4Second from "../Images/Products/RAM/Crucial RAM 16GB DDR4 2400MHz Desktop Memory 2nd.jpg";
import crucialDDR4Third from "../Images/Products/RAM/Crucial RAM 16GB DDR4 2400MHz Desktop Memory 3rd.jpg";

const Data = {
    CPU: {
        items: [
            {
                name: "Intel Core i5 11th Gen 6 Core",
                img: intel5,
                price: 235.44,
                info: "11th Gen Rocket Lake, i5 11600K, Socket 1200, 6 Cores 12 Threads, 3.9GHz"
                
            },
            {
                name: "Intel Core i7 11th Gen 8 Core",
                img: intel7,
                price: 332.99,
                info: "11th Gen Rocket Lake, i7 11700KF, Socket 1200, 8 Cores 16 Threads, 3.6GHz"
            },
            {
                name: "Intel Core i9 11th Gen 8 Core",
                img: intel9,
                price: 416.99,
                info: "11th Gen Rocket Lake, i9 11900, Socket 1200, 8 Cores 16 Threads, 2.5GHz"
            },
            {
                name: "AMD Ryzen 7 3800X",
                img: ryzen7,
                price: 294.75,
                info: "8 Cores 16 Threads, 3.9GHz"
            }
        ]
    },
    GPU: {
        items: [
            {
                name: "MSI GeForce GTX 1650 Ventus",
                img: gtx1650,
                price: 249.00,
                info: "4GB Graphics Memory, PCI Express 3.0 x 16 interface, cooling type = active fan, pre overclocked edition"
            },
            {
                name: "Gigabyte GeForce GTX 1080 Ti",
                img: gtx1080Ti,
                price: 340.00,
                info: "Windforce 3x Cooling system, composite heat-pipes, RGB fusion, 3d active fan"
            },
            {
                name: "GeForce RTX 3060 Ti Ventus",
                img: rtx3060Ti,
                price: 699.00,
                info: "8GB Graphics Memory, PCI Express 4.0 x 16 interface, cooling type = dynamic fan, pre overclocked edition"
            }
        ]
    },
    RAM: {
        items: [
            {
                name: "Corsair Vengeance RGB Black PRO 16GB (2 x 8GB) DDR 3200MHz",
                img: corsairDDR4,
                price: 69.81,
                info: "Dynamic multi-zone lighting, next generation software, 3200MHz 16GB (2 x 8GB), LED RGBS"
            },
            {
                name: "Crucial RAM 16GB DDR4 2400MHz Desktop Memory",
                img: crucialDDR4,
                price: 57.64,
                info: "DDR4, 16GB, 2400MHz, form factor = DIMM, item model = CT16G4DFD824A"
            }
        ]
    }
}

export default Data;