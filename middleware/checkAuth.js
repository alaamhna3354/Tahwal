export default function({redirect,store}) {
 // if(ctx.route.fullPath == '/')
  const isUserLogged = store.state.auth.isUserLogged;
    if(isUserLogged == false)
    return redirect("/login");
}