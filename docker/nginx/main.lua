local http = require("resty.http").new()

local res, err = http:request_uri("http://app:80/hc", {
    method = "GET"
})

if not res then
    ngx.log(ngx.ERR, "request failed: ", err)
    ngx.exit(500)
end

if res.status == 503 then
    ngx.log(ngx.ERR, "app is unhealthy")
    ngx.exit(503)
end 