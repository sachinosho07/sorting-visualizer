async function bubbleSort() {
    var i, j;
    await sleep(delay);

    for(i = 0; i < size - 1; i++) {
        var swapped = false;
        for(j = 0; j < size - i - 1; j++) {
            await sleep(delay);

            setColor(j, COMPARE1);
            setColor(j + 1, COMPARE2);
            await sleep(delay);

            if(arr[j] > arr[j + 1]) {
                swap(j, j + 1);
                await sleep(delay);
                swapped = true;
            }

            setColor(j, UNSORTED);
            setColor(j + 1, UNSORTED);
        }
        if(!swapped){
            for(k = 0; k < size ; k++){
                setColor(k, SORTED);
            }
            break;
        }

        await sleep(delay);

        setColor(j, SORTED);
    }

    setColor(0, SORTED);
}
