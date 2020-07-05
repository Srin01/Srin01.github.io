const apiKey = "gVo-Z5TCP-6_IAD9xb9JxHEXcYujgxx1VQjprc6bgdn41nBmmcvnRuAK3TB4WE6uXY4aY9T771G6IICtEIwn-48_yGb0XYCUbT2c_LoS_4tkuyW3I6B0v0z-vNsBX3Yx";
const Yelp = {
    search(term, location, sortby) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortby}`,
        {headers: {Authorization: `Bearer ${apiKey}`}
    }).then(response => {
            return response.json();
          }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map((business)=>({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
          });
        }
      };
export default Yelp;

