# Techvil

This project is a fake online tech store

## Overview

### The challenge

Users should be able to:

- See all the items on the shop page
- Filter the items by catagory
- Sort the items by price or alphabetically
- Search for an item
- Add items into the cart
- View more info on an item
- Checkout only when they have put items in the cart

### Screenshots

![Techvil Shop page](https://user-images.githubusercontent.com/91159544/177547850-e92ce17e-d1f0-4a17-baf0-535b9a94dc65.png)

![Techvil Details page](https://user-images.githubusercontent.com/91159544/177548100-446e0bed-417a-4463-a84e-c1192cfab25e.png)

### Links

- Code URL: [https://github.com/emil6957/techvil](https://github.com/emil6957/techvil)
- Live site URL: [https://emil6957.github.io/techvil/](https://emil6957.github.io/techvil/)

## My process

### Built with

- Flexbox
- CSS Grid
- CSS Animation
- [React](https://reactjs.org/) - JS library
- Dynamic routing

### What I learned

One of the main things i learnt here is to do dynamic routing

```js
<Route path="/:name" element={<MoreInfo cartItems={cartItems} addItemToCart={addItemToCart} item={displayProduct} />} />
```
Here in the MoreInfo component i can use the parameter in the URL to find the item data and create unique pages for each item.
```js
const params = useParams();
const [item, setItem] = useState();
const [ammount, setAmmount] = useState(1);
const [loading, setLoading] = useState(true);
const [mainImg, setMainImg] = useState();
const [allImgs, setAllImgs] = useState([]);

useEffect(() => {
    Object.values(data).forEach(val => val.items.filter(val => {if(val.name === params.name) setItem(val);}));
    setLoading(false);
}, [])

let listElements;
let extraImgElements;
useEffect(() => {
    if(loading === false) {
        setMainImg(item.img);
        item.extraImgs.forEach(img => setAllImgs(prevState => [...prevState, img]));
    }
}, [item])

if(loading === false) {
    const listInfo = item.info.split(",");
    listElements = listInfo.map(item => <li className="info" key={nanoid()}>{item}</li>)
    extraImgElements = item.extraImgs.map(img => <div key={nanoid()} className={`img-card-container ${img === mainImg ? "current-img" : ""}`}><img onClick={() => setMainImg(img)} className="img-card" src={img} alt="Product" /></div>)
}
```

Another thing I learnt here was creating a way for users to search, sort and filter items.
Here are the functions i used in the Aside component to filter the items
```js
const [showAllItems, setShowAllItems] = useState(false);
const [showComputerPartsItems, setShowComputerPartsItems] = useState(false);
const [showPreBuiltItems, setShowPreBuiltItems] = useState(false);
    
function displayAll(event) {
    setShowAllItems(prevBool => !prevBool);
    setShowComputerPartsItems(false);
    setShowPreBuiltItems(false);
}

function displayComputerParts(event) {
    shortenAfter(showPreBuiltItems, !showComputerPartsItems);
    setShowComputerPartsItems(prevBool => !prevBool);
}

function displayPreBuilt(event) {
    shortenAfter(!showPreBuiltItems, showComputerPartsItems);
    setShowPreBuiltItems(prevBool => !prevBool);
}

```


### Useful resources

- [https://reactrouter.com/en/main/route/route](https://reactrouter.com/en/main/route/route) - This resource was really helpful for learning about dynamic routing

