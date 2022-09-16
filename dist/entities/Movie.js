"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class Movie {
    constructor(movie) {
        this.types = [];
        this.areas = [];
        this.isHot = false;
        this.isClassic = false;
        this.name = movie.name;
        this.types = movie.types ? movie.types : ['喜剧'];
        this.areas = movie.areas ? movie.areas : ['中国大陆'];
        this.timeLong = movie.timeLong;
        this.isHot = movie.isHot ? movie.isHot : false;
        this.isClassic = movie.isClassic ? movie.isClassic : false;
        this.description = movie.description ? movie.description : '电影简介';
        this.poster = movie.poster;
    }
    validateThis() {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield (0, class_validator_1.validate)(this);
            const temp = errors.map(e => { return Object.values(e.constraints); });
            return temp.flat();
        });
    }
    static transform(plainObject) {
        if (plainObject instanceof Movie) {
            return plainObject;
        }
        return (0, class_transformer_1.plainToInstance)(Movie, plainObject);
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '电影名称不为空' }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], Movie.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '电影类型不为空' }),
    (0, class_validator_1.ArrayMinSize)(1, { message: '电影类型至少有一个' }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsArray)({ message: '必须是一个数组' }),
    __metadata("design:type", Array)
], Movie.prototype, "types", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '上映区域不为空' }),
    (0, class_validator_1.ArrayMinSize)(1, { message: '上映区域至少有一个' }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsArray)({ message: '必须是一个数组' }),
    __metadata("design:type", Array)
], Movie.prototype, "areas", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '电影时长不为空' }),
    (0, class_validator_1.IsInt)({ message: '时长必须是整数' }),
    (0, class_validator_1.Min)(1, { message: '时长最小1分钟' }),
    (0, class_validator_1.Max)(1800, { message: '时长过长' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], Movie.prototype, "timeLong", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '是否热映不为空' }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], Movie.prototype, "isHot", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '是否为经典影片不为空' }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], Movie.prototype, "isClassic", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '电影简介不为空' }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], Movie.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '海报图不能为空' }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], Movie.prototype, "poster", void 0);
exports.Movie = Movie;
