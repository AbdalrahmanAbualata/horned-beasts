import { element } from 'prop-types';
import React from 'react';
import HornedBeast from "./HornedBeasts"
class Main  extends React.Component {
    render() {
        let  arr =[{
            "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
            "title": "UniWhal",
            "description": "A unicorn and a narwhal nuzzling their horns",
            "keyword": "narwhal",
            "horns": 1
          },
        
          {
            "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
            "title": "Rhino Family",
            "description": "Mother (or father) rhino with two babies",
            "keyword": "rhino",
            "horns": 2
          },
          
          {
            "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
            "title": "Unicorn Head",
            "description": "Someone wearing a creepy unicorn head mask",
            "keyword": "unicorn", 
            "horns": 1
        }];

        return (
            <>
            <HornedBeast  imageUrl='https://i.pinimg.com/originals/32/a6/4f/32a64f7f21e044b3c2029cf7eb0ad498.jpg'  title='the elhorn' imageAlt='the elhorn Image' imageTitle='the elhorn' description="Red Delicious is one of the most famous American apples, and one of the most widely grown apple varieties. ... Red Delicious is a medium-sized apple, with a tall conical shape. The dark and intense crimson colour makes it the quintessential red apple, and it is has strong shelf appeal." />
        <HornedBeast  imageUrl='https://ichef.bbci.co.uk/news/1024/branded_news/0370/production/_104508800_vandermerweimage.jpg'  title='Siberian unicorn' imageAlt='Siberian unicorn Image' imageTitle='Siberian unicorn' description="As green apple is a fibre rich fruit, it is beneficial for weight loss. Green apples have lower sugar levels and more minerals and antioxidants that help to shed a few pounds. ... Tip: Green apples can increase your metabolism and help you to reduce weight. If you are on a diet then green apples can be a favourite snack." />
        
        {
           arr.map((x,indx)=>{
            return(
              <HornedBeast key={indx} title = {x.title} imageUrl = {x.image_url} description = {x.description} keyword = {x.keyword} horns = {x.horns +"    horns "}/>
            );
          })
        }
            </>
        )
    }
}

export default Main;