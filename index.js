function receivesAFunction(callback)
{
	callback();
}
function returnsANamedFunction()
{
	let fun = () => "hi"
	return fun
}

function returnsAnAnonymousFunction()
{
	return function()
	{
		return "hi"
	}
}
