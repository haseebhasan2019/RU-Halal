export default async function handler(req, res) {
    const data = await fetch('http://localhost:5000/restaurants')
    console.log(data)
    res.status(200).json({data: data})

    // try {
    //     const response = await fetch('http://localhost:5000/restaurants')
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.setHeader('Cache-Control', 'max-age=180000');
    //     res.end(JSON.stringify(response));
    //   }
    
    //   catch (error) {
    //     res.json(error);
    //     res.status(405).end();
    //   }
}
