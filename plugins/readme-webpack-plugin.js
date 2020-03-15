class ReadmeWebpackPlugin {
    constructor(options) {
        // console.log(options)
    }

    apply(compiler){
        //
       compiler.hooks.compile.tap('ReadmeWebpackPlugin', ( compilation ) => {
           console.log('同步钩子的写法')
       })

        compiler.hooks.emit.tapAsync('ReadmeWebpackPlugin',( compilation,callback ) => {
            console.log(compilation.assets)
            compilation.assets['readme.txt'] = {
                source:function(){
                    return 'readme'
                },
                size:function(){
                    return 6
                }
            }
            callback()
        })
    }
}
module.exports = ReadmeWebpackPlugin;