import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import fs from 'fs';
import path from 'path';

import App from '../src/App';

const app = express();
const PORT = 8080;

const router = express.Router();

const serverRenderer = (req,res) => {
    fs.readFile(path.resolve('./build/index.html'),'utf8',(err,data)=>{
        if(err){
            console.err(err);
            return res.status(500).send('An error occurred')
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`
            )
        )
    })
}

router.use('^/$',serverRenderer)

router.use(express.static(path.resolve(__dirname,'..','build'),{maxAge:'30d'}))

app.use(router);

app.listen(PORT,()=>{
    console.log(`SSR running on ${PORT}`);
})