"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllowUnauthorizedRequest = exports.IS_PUBLIC_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.IS_PUBLIC_KEY = 'auth';
const AllowUnauthorizedRequest = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.AllowUnauthorizedRequest = AllowUnauthorizedRequest;
//# sourceMappingURL=allowed-routes.strategy.js.map