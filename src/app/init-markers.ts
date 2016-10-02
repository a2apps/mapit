export class Init{
    load(){
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') == undefined){
            console.log('No markers found.. creating the markers')
                var markers=[
                        {
                        name: 'Company One',
                        lat: 26.601805, 
                        lng: 94.199624,
                        draggable: true
                        },
                        {
                        name: 'Company Two',
                        lat: 26.746520,
                        lng: 94.202586,
                        draggable: true
                        },
                        {
                        name: 'Company Three',
                        lat: 26.651571,
                        lng:  94.32826,
                        draggable: false
                        }
                    ];
                localStorage.setItem('markers', JSON.stringify(markers));
                return;
        }else{
            console.log('loading markers!')
        }
    }
}