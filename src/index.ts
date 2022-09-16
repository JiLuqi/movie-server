import "reflect-metadata"
import {MovieService} from "./services/MovieService";
import {Movie} from "./entities/Movie";
import {SearchCondition} from "./entities/SearchCondition";

let timeLong = 100;

// for (let i = 0; i < 100; i++) {
//     timeLong += 1;
//     MovieService.add(new Movie({
//         name: '123',
//         timeLong: timeLong,
//         poster: '415'
//     })).then();
// }
// MovieService.delete("6316c5faf52802de4b9643ef").then(res => {
//     console.log(res);
// })
// MovieService.edit('6316f096a8a76b26c07f7258', m).then(res => {
//     console.log(res);
// });
const s: any = {
    page: 1,
    limit: 10,
    key: '123'
}
MovieService.find(s).then(res => {

})


