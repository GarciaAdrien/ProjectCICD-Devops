exports.getPosts = (req, res, next) => {
    res.status(200).json({
      posts: [
        {
          "id": 1,
            "mail": 'toto@toto.com',
            "priorite":1,
            "sujet": "probleme ordinateur",
            "description": "ça marche pas"
        },
        {
            "id": 2,
            "mail": 'titi@toto.com',
            "priorite":3,
            "sujet": "probleme internet",
            "description": "ça marche pas"
        },
        {
            "id": 3,
            "mail": 'tata@toto.com',
            "priorite":3,
            "sujet": "probleme email",
            "description": "ça marche pas"
        },
        {
            "id": 4,
            "mail": 'tutu@toto.com',
            "priorite":2,
            "sujet": "probleme rembouresement",
            "description": "ça marche pas"
        },
        {
            "id": 5,
            "mail": 'tyty@toto.com',
            "priorite":3,
            "sujet": "probleme machine",
            "description": "ça marche pas"
        }
    ]
    
    
    });
  };
  
  exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    // Create post in db
    res.status(201).json({
      message: 'Post created successfully!',
      post: { id: new Date().toISOString(), title: title, content: content }
    });
  };
  