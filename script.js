document.getElementById('calculateBtn').addEventListener('click', function() {
    var totalCost = document.getElementById('totalCost').value;
    var totalImpressions = document.getElementById('totalImpressions').value;

    if (totalCost && totalImpressions) {
        var cpm = (totalCost / totalImpressions) * 1000;
        document.getElementById('result').innerText = `CPM: $${cpm.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please enter all values';
    }
});
