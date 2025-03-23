function solution(players, m, k) {
    const servers = m;
    const operTime = k;
    
    let answer = 0;
    let map = new Map();
    // 증설된 서버 수
    let added = 0;
    

    for(let i = 0; i < players.length; i++){
        // 시간대 별 게임 이용자 수(i = 시간)
        let player = players[i];
        let tfs = 0;

        // 시간대 별 서버 남은 시간 체크
        for (let j = 0; j < i; j++){
            let value = map.get(j);
            
            if (value == undefined) continue;

            if(map.has(j) && value[0] != 0){
                value[0] -= 1 ;
                map.set(j, value);
                
                if(value[0] == 0) {
                    added -= value[1];
                }
            }
        }

        // 서버 증설 및 시간대 저장
        if (player-(servers*added) >= servers) {
            tfs = Math.floor(player/servers-added);
            answer += tfs
            added += tfs
            map.set(i, [operTime, tfs]);
        }
        
        console.log(`시간:${i}~${i+1} 게임이용자수:${player} 증설된서버수:${added} 증설횟수:${tfs}`)
    }
    console.log(answer);
}


const players1 = [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5]	
const m1 = 3	
const k1 = 5	
solution(players1, 1, 1) //7

const players2 = [0, 0, 0, 10, 0, 12, 0, 15, 0, 1, 0, 1, 0, 0, 0, 5, 0, 0, 11, 0, 8, 0, 0, 0]	
const m2 = 5	
const k2 = 1	
solution(players2, m2, k2) //11

const players3 = [0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 5, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1]	
const m3 = 1	
const k3 = 1	
solution(players3, m3, k3) //12