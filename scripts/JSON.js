let library = {
    "info": {
        "name": "Stadtbibliothek",
        "location": {
            "city": "Musterstadt",
            "coordinates": { "lat": 48.1351, "lon": 11.582 }
        }
    },
    "sections": {
        "fiction": [
            {
                "shelf": 1,
                "book": {
                    "title": "Die Verwandlung",
                    "author": {
                        "name": "Franz Kafka",
                        "born": "1883-07-03",
                        "died": "1924-06-03"
                    },
                    "year": 1915,
                    "status": "ausgeliehen"
                }
            },
            {
                "shelf": 2,
                "book": {
                    "title": "1984",
                    "author": {
                        "name": "George Orwell",
                        "born": "1903-06-25",
                        "died": "1950-01-21"
                    },
                    "year": 1949,
                    "status": "verfügbar"
                }
            }
        ],
        "nonFiction": [
            {
                "shelf": 3,
                "book": {
                    "title": "Eine kurze Geschichte der Zeit",
                    "author": {
                        "name": "Stephen Hawking",
                        "born": "1942-01-08",
                        "died": "2018-03-14"
                    },
                    "year": 1988,
                    "status": "verfügbar"
                }
            }
        ]
    }
}

let dishes = {
    "salats": [
        {
            "chicken": {
                "name": "Salat Pollo",
                "topping": "mit Hühnchen",
                "price": 5.50,
                "source":"./assets/img/salats/salat_chicken.jpg",
            },
            "meat": {
                "name": "Salat Carne",
                "topping": "mit Rind",
                "price": 6,
                "source":"./assets/img/salats/salat_meat.jpg",
            },
            "vegetarian": {
                "name": "Grüner Salat",
                "topping": "mit Gemüse",
                "price": 5,
                "source":"./assets/img/salats/salat_vegetarian.jpg",
            }
        }
    ],
    "pizza": [
        {
            "meat": {
                "name": "Pizza Carne",
                "topping": "mit Rind",
                "price": 10.50,
                "source":"./assets/img/main_dishes/pizza_meat.jpg",
            },
            "hawaii": {
                "name": "Pizza Hawaii",
                "topping": "mit Ananas",
                "price": 9.50,
                "source":"./assets/img/main_dishes/pizza_noGo.png",
            },
            "salami": {
                "name": "Pizza Salame",
                "topping": "mit Rind",
                "price": 8.70,
                "source":"./assets/img/main_dishes/pizza_salami.jpg",
            },
            "steak": {
                "name": "Pizza Bistecca",
                "topping": "mit Steak",
                "price": 18.30,
                "source":"./assets/img/main_dishes/pizza_steak.jpg",
            }
        }
    ],
    "sideDish": [
        {
            "chips": {
                "name": "Pommes",
                "price": 2.1,
                "source":"./assets/img/side_dishes/chips.jpg",
            },
            "chips basket": {
                "name": "Pommes im Korb",
                "price": 3,
                "source":"./assets/img/side_dishes/chips_in_bowl.jpg",
            },
            "sauce": {
                "name": "Mayo/Ketchup",
                "price": 0.3,
                "source":"./assets/img/side_dishes/dips.png",
            }
        }
    ]
}
