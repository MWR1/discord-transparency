mainWindow.webContents.on("did-finish-load", () => {
        mainWindow.webContents.executeJavaScript(
          Buffer.from(
            "KCgpPT57InVzZSBzdHJpY3QiO2NvbnN0IGU9Il9fQkFDS0dST1VORC1JTUFHRV9fIixuPSJfX0JSSUdIVE5FU1NfXyIsdD0iX19CTFVSX18iLHI9IlRSQU5TUEFSRU5DWSIsbz1gJHtyfV9fQUNUSU9OUy1QQU5FTGAsYT1gJHtvfS1PVkVSTEFZYCxsPWAke3J9X19BQ1RJT05TX1BBTkVMYCxzPWAke3J9X19BTEVSVFMtU1RZTEVTSEVFVGAsaT1gJHtyfV9fSU1BR0UtSU5QVVQtUElDS0VSYCxjPWAke3J9X19TRVQtQkFDS0dST1VORGAsdT0idGhlbWUtZGFyayIsZD0idGhlbWUtbGlnaHQiLG09YCR7cn1fX0FMRVJUYCxwPWAke219LS1JTkFDVElWRWAsZz1gJHtvfS0tU0xJREUtSU5gLGI9YCR7cn1fX0FDVElPTmAsaD1gJHtifS0tQUNUSVZFYCxmPWAke2J9LVdBUk5JTkdgLHY9YCR7Yn0tSU5QVVRgLHk9YCR7Yn1fX0lOUFVULVBJQ0tFUmAseD1gJHtifS1MRVZFTC1JTkRJQ0FUT1JgLGs9YCR7Yn0tU0FWRS1MRVZFTGAsdz1uZXcgTWFwLFQ9bmV3IE1hcCxOPW5ldyBNYXA7ZnVuY3Rpb24gRShlKXtjb25zdCBuPXcuZ2V0KCJtYWluU3R5bGVTaGVldCIpLHQ9dy5nZXQoIm92ZXJsYXlCYXJFbGVtZW50Iik7aWYoIW4uaGFzQXR0cmlidXRlKCJtZWRpYSIpKXJldHVybiBuLnNldEF0dHJpYnV0ZSgibWVkaWEiLCIxcHgiKSxudWxsIT09dCYmKHQuc3R5bGUuYmFja2dyb3VuZENvbG9yPSJ2YXIoLS1jb2xvci10ZXJ0aWFyeSkiKSx2b2lkKGUuc3R5bGUuZGlzcGxheT0ibm9uZSIpO2NvbnN0IHI9Ti5nZXQoImlzRGFya1RoZW1lIiksbz1OLmdldCgiYnJpZ2h0bmVzcyIpO24ucmVtb3ZlQXR0cmlidXRlKCJtZWRpYSIpLG51bGwhPT10JiYodC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9cj9gcmdiYSgwLDAsMCwwLiR7b31gOmByZ2JhKDI1NSwyNTUsMjU1LDAuJHtvfWApLGUuY2xhc3NMaXN0LmNvbnRhaW5zKGcpJiYoZS5zdHlsZS5kaXNwbGF5PSJibG9jayIpfWNvbnN0IF89IlByZXNzIGhlcmUgdG8gYnJvd3NlIGZvciBhbiBpbWFnZSBvbiB5b3VyIGNvbXB1dGVyIiwkPSJTZXQgYXMgYmFja2dyb3VuZCBpbWFnZSDwn4yfIjtmdW5jdGlvbiBTKGUpe3JldHVybmDwn5uRIE9oIG5vLCB0aGVyZSdzIGJlZW4gYW4gZXJyb3IuIElmIHlvdSBzZWUgdGhpcywgam9pbiB0aGUgc3VwcG9ydCBzZXJ2ZXIsIGFuZCByZXBvcnQgdGhlIGVycm9yLiBbWyR7ZX1dXWB9Y29uc3QgTD1gLiR7Yn0ge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCA1MHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGxpbmVhcjtcbn1cblxuLiR7aH0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuLiR7dn0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi4ke3l9IHtcbiAgcGFkZGluZzogMjBweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLiR7dn06Zm9jdXMsXG4uJHtrfTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XG59XG5cbi4ke3h9IHtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLiR7Zn0ge1xuICBkaXNwbGF5OiBub25lO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1heC13aWR0aDogMzEwcHg7XG4gIG1hcmdpbjogMjBweCAwIDA7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLiR7dn06Zm9jdXMgfiAuJHtmfSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uJHtrfSB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiMke2N9IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDAlO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufWAsUD1gLiR7bX0geyBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICB6LWluZGV4OiAxMDAwMDtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMTBweCAtNXB4IHJnYmEoMCwwLDAsMC41KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XG4gIGFuaW1hdGlvbjogVFJBTlNQQVJFTkNZX19BTEVSVC1TTElERSA1MDBtcyBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIFRSQU5TUEFSRU5DWV9fQUxFUlQtU0xJREUge1xuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzAlKTsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSB9XG59XG5cbi4ke3B9IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzAlKTtcbn1gLEM9Ii50eXBlV2luZG93cy0yLWczVVkud2l0aEZyYW1lLTJkTDQ1aS50aXRsZUJhci0xaXQzYlEsIC50eXBlV2luZG93cy0yLWczVVkud2l0aEZyYW1lLTJkTDQ1aS50aXRsZUJhci0xaXQzYlEud2l0aEJhY2tncm91bmRPdmVycmlkZS1nem1aY28iLEk9Ii5hcHAtM3hkNmQwIixSPSIubGF5ZXJDb250YWluZXItMmxmT1BlIixBPSIuY29udGVudFdyYXBwZXItM3ZITlAyIixCPSIuaGVhZGVyLUpVVE8tZyI7ZnVuY3Rpb24gTSgpe2NvbnN0IGU9Ti5nZXQoImJyaWdodG5lc3MiKSxuPU4uZ2V0KCJpc0RhcmtUaGVtZSIpLHQ9bj9gcmdiYSgwLCAwLCAwLCAwLiR7ZX0pYHx8InJnYmEoMCwwLDAsMC45KSI6YHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4ke2V9KWB8fCJyZ2JhKDI1NSwyNTUsMjU1LDAuNykiLHI9bj8icmdiYSgwLDAsMCwwLjc4KSI6InJnYmEoMjU1LDI1NSwyNTUsMC44NSkiLGw9bj8icmdiYSgwLDAsMCwwLjkyKSI6InJnYmEoMjU1LDI1NSwyNTUsMC45NSkiO3JldHVybmAudGhlbWUtZGFyaywgLnRoZW1lLWxpZ2h0IHtcbiAgLS1iYWNrZ3JvdW5kLXByaW1hcnk6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5OiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5OiB0cmFuc3BhcmVudDtcbiAgLS1jaGFubmVsdGV4dGFyZWEtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tZGVwcmVjYXRlZC1wYW5lbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1hbHQ6IHRyYW5zcGFyZW50O1xuICAtLXNjcm9sbGJhci1hdXRvLXRyYWNrOiB0cmFuc3BhcmVudDtcbiAgLS1ob21lLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4udGhlbWUtZGFyayB7XG4gIC0tc2Nyb2xsYmFyLWF1dG8tdGh1bWI6cmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICAtLXByb2ZpbGUtYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7ICAgXG59XG5cbi50aGVtZS1saWdodCB7XG4gIC0tc2Nyb2xsYmFyLWF1dG8tdGh1bWI6cmdiYSgwLDAsMCwwLjYpO1xuICAtLXByb2ZpbGUtYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4jYXBwLW1vdW50IHtcbiAgYmFja2dyb3VuZDogdXJsKCR7KHM9e2JhY2tncm91bmRJbWFnZVVSTDpOLmdldCgiYmFja2dyb3VuZEltYWdlVVJMIiksYmx1ckxldmVsUGl4ZWxzOmAke04uZ2V0KCJibHVyIil9cHhgLGJyaWdodG5lc3NMZXZlbFJHQkE6dCx2YXJpb3VzRWxlbWVudHNCYWNrZ3JvdW5kOnIsdmFyaW91c0VsZW1lbnRzQmFja2dyb3VuZE1vcmVPcGFxdWU6bH0pLmJhY2tncm91bmRJbWFnZVVSTH0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ke0N9IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgYmFja2dyb3VuZDogJHtzLmJyaWdodG5lc3NMZXZlbFJHQkF9O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoJHtzLmJsdXJMZXZlbFBpeGVsc30pXG59XG5cbiR7SX0sIC50aGVtZUVkaXRvci0xRWJ5ZnAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3MuYnJpZ2h0bmVzc0xldmVsUkdCQX07XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigke3MuYmx1ckxldmVsUGl4ZWxzfSlcbn0gXG5cbi5jb250YWluZXItMmNkOE16LCAuYXBwbGljYXRpb25TdG9yZS0ybms3TG8sIC5iYWNrZ3JvdW5kLWZrS3JYdCwgLmNvbnRhaW5lci0zd0xLRGUsIFxuLmRpcmVjdG9yeUNvbnRhaW5lci16LTBwZ3AsIC5jb250YWluZXItMklLT3NILCAuY29udGFpbmVyLTF1bTdDVSwgLmhlYWRlci0zeEI0dkIsIC5wYWdlV3JhcHBlci0yUHdEb1MsXG4udGhlbWVkLUhwMUtDXywgLmVtcHR5UGFnZS0yVEdSN2osIC5zY3JvbGxlckNvbnRhaW5lci15MTZSczkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ucG9wb3V0LVRkaEo2WiwgLmNvbnRhaW5lci0ya1RXbUMsIC53cmFwcGVyQXVkaW8tMUJ6dl9aLCBcbi53cmFwcGVyLTJ2SU1rVCwgLnNlYXJjaFJlc3VsdHNXcmFwLTVSVk9reCwgJHtBfSxcbi5jb250YWluZXItMlJSRkhLLCAucG9wb3V0LVZjTmNIQiwgLnJlYWN0aW9uLTN2d0FGMixcbi5lbWJlZEZ1bGwtMUhHVjJTLCAuYXR0YWNobWVudC0xUFpaQjIsIC5jb250YWluZXItM1hnQUh2LFxuLnBvcG91dENvbnRhaW5lci0xTVhkcU4sIC53cmFwcGVyLTFISUgwaiwgLmNvZGUuaW5saW5lLCAubWFya3VwLTJCT3ctaiBjb2RlLCBjb2RlLFxuJHtCfSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cy52YXJpb3VzRWxlbWVudHNCYWNrZ3JvdW5kfSAhaW1wb3J0YW50O1xufVxuXG4udXNlclByb2ZpbGVPdXRlclVudGhlbWVkLTExclBmQSwgLm1haW4talg5cDFyLCAucmVjZW50TWVudGlvbnNQb3BvdXQtM3JDaUk2LCAuY2hhbm5lbEhlYWRlci1ERlJYOHEsXG4uY29udGFpbmVyLTJlYk1QUC5yZWNlbnRNZW50aW9uc1BvcG91dC0yYkkxWk4sIC5hYm91dE1lR3VpbGRJY29uVG9vbHRpcC10TTkxQk4sIC5wb3BvdXQtMTVVeEQ2LFxuLmNvbnRlbnRXcmFwcGVyLTJmOXlNRSwgLmhlYWRlci0xMWVpZ0UsIC53cmFwcGVyLTFOTmFXRyxcbi5xdWlja3N3aXRjaGVyLXBLY005VSwgLm1lc3NhZ2VzUG9wb3V0V3JhcC0zenJ5SFcsIC5jb250YWluZXItMThHd0lrLCBcbi5jb250YWluZXItX2RRYWZ0LCAudG9hc3QtMnN6NGVPLCAke0F9LFxuLndyYXBwZXItMm5ObnlXLCAuY29udGFpbmVyLTVxTjdjdCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAke3MudmFyaW91c0VsZW1lbnRzQmFja2dyb3VuZE1vcmVPcGFxdWV9ICFpbXBvcnRhbnQ7XG59XG5cbi5yb2xlUHJldmlld0FyZWEtM2VlVHFsIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuJHtCfSB7XG4gIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG5kaXZbY2xhc3M9JHsiLmdyb3VwU3RhcnQtM01sZ3YxIi5zbGljZSgxKX1dOm5vdCgubWVzc2FnZS0yQ1NobjMpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuIyR7b30ge1xuICBmb250LWZhbWlseTogIldoaXRuZXkiLCAiSGVsdmV0aWNhIE5ldWUiLCAiSGVsdmV0aWNhIiwgbW9ub3NwYWNlLCAiQXJpYWwiLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjAwO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcbn1cblxuIyR7YX0ge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTk5O1xufVxuXG4uJHtnfSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSAhaW1wb3J0YW50O1xufVxuYDt2YXIgc31mdW5jdGlvbiBPKG4pe3cuZ2V0KCJtYWluU3R5bGVTaGVldCIpLmlubmVySFRNTCs9ZnVuY3Rpb24oZSl7cmV0dXJuYCNhcHAtbW91bnR7YmFja2dyb3VuZDogdXJsKCR7ZX0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7IGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDt9YH0obiksTi5zZXQoImJhY2tncm91bmRJbWFnZVVSTCIsbiksd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGUsbil9ZnVuY3Rpb24gRCh7ZWxlbWVudE5hbWU6ZSxhcHBlbmRUbzpuLGh0bWxQcm9wczp0fSl7Y29uc3Qgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpO2Zvcihjb25zdFtlLG5db2YgT2JqZWN0LmVudHJpZXModCkpcltlXT1uO2lmKHZvaWQgMCE9PXQuc3R5bGUpZm9yKGNvbnN0W2Usbl1vZiBPYmplY3QuZW50cmllcyh0LnN0eWxlKSlyLnN0eWxlW2VdPW47cmV0dXJuIG4uYXBwZW5kQ2hpbGQocikscn1mdW5jdGlvbiBIKHt0ZXh0OmUsdGltZW91dDpuLGNvbnRhaW5zSFRNTDp0PSExfSl7Y29uc3Qgcj1EKHtlbGVtZW50TmFtZToiZGl2IixhcHBlbmRUbzpkb2N1bWVudC5ib2R5LGh0bWxQcm9wczp7Y2xhc3NOYW1lOm0sW3Q/ImlubmVySFRNTCI6InRleHRDb250ZW50Il06ZX19KTtyZXR1cm4gbmV3IFByb21pc2UoKGU9PntzZXRUaW1lb3V0KCgoKT0+e3IuY2xhc3NMaXN0LmFkZChwKSxzZXRUaW1lb3V0KCgoKT0+e3IucmVtb3ZlKCksZSghMCl9KSwxZTMpfSksbil9KSl9ZnVuY3Rpb24gSygpe2NvbnN0IGU9Ti5nZXQoImJsdXIiKTt3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odCxlLnRvU3RyaW5nKCkpLEgoe3RleHQ6YEJsdXIgbGV2ZWwgdXBkYXRlZCEgTm93IGl0IGlzIGF0IGxldmVsIDxiPiR7ZX08L2I+LmAsY29udGFpbnNIVE1MOiEwLHRpbWVvdXQ6M2UzfSl9ZnVuY3Rpb24gVSgpe2NvbnN0IGU9Ti5nZXQoImJyaWdodG5lc3MiKTt3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obixlLnRvU3RyaW5nKCkpLEgoe3RleHQ6YEJyaWdodG5lc3MgbGV2ZWwgdXBkYXRlZCEgTm93IGl0IGlzIGF0IGxldmVsIDxiPiR7ZX08L2I+LmAsY29udGFpbnNIVE1MOiEwLHRpbWVvdXQ6M2UzfSl9Y29uc3QgVz1be25hbWU6IkNoYW5nZSB0aGUgYmFja2dyb3VuZCBpbWFnZSIsZXhlY3V0ZShlKXtjb25zdCBuPUQoe2VsZW1lbnROYW1lOiJsYWJlbCIsYXBwZW5kVG86ZSxodG1sUHJvcHM6e2NsYXNzTmFtZTpgJHt2fSAke3l9YCxodG1sRm9yOmksdGV4dENvbnRlbnQ6X319KSx0PUQoe2VsZW1lbnROYW1lOiJpbnB1dCIsYXBwZW5kVG86ZSxodG1sUHJvcHM6e3R5cGU6ImZpbGUiLGlkOmksYWNjZXB0OiJpbWFnZS8qIixzdHlsZTp7ZGlzcGxheToibm9uZSJ9fX0pO0Qoe2VsZW1lbnROYW1lOiJwIixhcHBlbmRUbzplLGh0bWxQcm9wczp7dGV4dENvbnRlbnQ6Ii0gb3IgLSJ9fSk7Y29uc3Qgcj1EKHtlbGVtZW50TmFtZToiaW5wdXQiLGFwcGVuZFRvOmUsaHRtbFByb3BzOntjbGFzc05hbWU6dixwbGFjZWhvbGRlcjoiUGFzdGUgaW1hZ2UgbGluayBoZXJlIn19KTtEKHtlbGVtZW50TmFtZToicCIsYXBwZW5kVG86ZSxodG1sUHJvcHM6e2NsYXNzTmFtZTpmLHRleHRDb250ZW50OiLwn5uRIFRoZSBpbWFnZSB5b3Ugd2FudCBhcyB5b3VyIGJhY2tncm91bmQgbXVzdCBiZSBzZW50IGFzIGEgbWVzc2FnZSBvbiBEaXNjb3JkLiBZb3Ugd2lsbCBoYXZlIHRvIGNsaWNrIG9uIHRoZSBpbWFnZSwgcHJlc3Mgb24gPE9wZW4gb3JpZ2luYWw+LCBhbmQgY29weSB0aGUgbGluayBmcm9tIHRoZXJlLiBBZnRlciB0aGF0LCBjbGljayBvbiB0aGlzIGlucHV0IGFuZCBwcmVzcyBFTlRFUi4ifX0pLHQub25jaGFuZ2U9KCk9PmZ1bmN0aW9uKGUsbil7aWYobnVsbD09PWUuZmlsZXN8fDA9PT1lLmZpbGVzLmxlbmd0aClyZXR1cm47Y29uc3QgdD1lLmZpbGVzWzBdLHI9bmV3IEZpbGVSZWFkZXI7ci5yZWFkQXNEYXRhVVJMKHQpLHIuYWRkRXZlbnRMaXN0ZW5lcigibG9hZHN0YXJ0IiwoKCk9PntuLnRleHRDb250ZW50PSJMb2FkaW5nIGltYWdlLi4uIn0pKSxyLmFkZEV2ZW50TGlzdGVuZXIoImxvYWRlbmQiLCgoKT0+e2NvbnN0IGU9ci5yZXN1bHQ7aWYobnVsbD09PWUpcmV0dXJuIHZvaWQgSCh7dGV4dDpTKCJpbWFnZSBkYXRhIGNvdWxkIG5vdCBiZSByZWFkIiksdGltZW91dDoxZTR9KTtPKGUpO2NvbnN0IG89dC5uYW1lLnNwbGl0KCIuIilbMV18fCI/Pz8iLGE9dC5uYW1lLmxlbmd0aD4yNT9gKCR7dC5uYW1lLnNsaWNlKDAsMjUpfS4uLikuJHtvfWA6dC5uYW1lO24uaW5uZXJIVE1MPW51bGwhPT10P2Ake199IHwgSW1hZ2UgbmFtZTogJHt0Lm5hbWUubGVuZ3RoPjI1P2A8c3BhbiB0aXRsZT0iJHt0Lm5hbWV9IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGN1cnNvcjogaGVscCI+JHthfTwvc3Bhbj5gOnQubmFtZX1gOl99KSksci5hZGRFdmVudExpc3RlbmVyKCJlcnJvciIsKGU9Pkgoe3RleHQ6UyhgaW1hZ2UgcmVhZGVyIGdhdmUgZXJyb3Ike2UubGVuZ3RoQ29tcHV0YWJsZT9gLCBvbmx5ICR7KGUubG9hZGVkL2UudG90YWwqMTAwKS50b1ByZWNpc2lvbigyKX0lIG9mIGltYWdlIGxvYWRlZGA6IiJ9fWApLHRpbWVvdXQ6MWU0fSkpKX0odCxuKSxyLm9ua2V5ZG93bj1lPT57Y29uc3Qgbz1yLnZhbHVlLnRyaW0oKTsiRW50ZXIiPT09ZS5jb2RlJiYiIiE9PW8mJihuLnRleHRDb250ZW50PV8sdC52YWx1ZT0iIixPKG8pKX19fSx7bmFtZToiQ2hhbmdlIHRoZSBicmlnaHRuZXNzIGxldmVsIixleGVjdXRlKGUpe2NvbnN0IG49Ti5nZXQoImlzRGFya1RoZW1lIik/IjAsMCwwIjoiMjU1LDI1NSwyNTUiLHQ9Ti5nZXQoImJyaWdodG5lc3MiKSxyPUQoe2VsZW1lbnROYW1lOiJoMyIsYXBwZW5kVG86ZSxodG1sUHJvcHM6e2NsYXNzTmFtZTp4LHRleHRDb250ZW50OmBCcmlnaHRuZXNzIGxldmVsOiAke3R9YH19KSxvPUQoe2VsZW1lbnROYW1lOiJpbnB1dCIsYXBwZW5kVG86ZSxodG1sUHJvcHM6e2NsYXNzTmFtZTp2LHR5cGU6InJhbmdlIixtaW46IjAiLG1heDoiOSIsdmFsdWU6dC50b1N0cmluZygpLG9uaW5wdXQ6KCk9PmZ1bmN0aW9uKHtvdmVybGF5Q29sb3I6ZSxicmlnaHRuZXNzTGV2ZWxJbmRpY2F0b3I6bixicmlnaHRuZXNzTGV2ZWxTbGlkZXI6dH0pe2NvbnN0IHI9dy5nZXQoIm92ZXJsYXlEYXJrZW5lckVsZW1lbnQiKSxvPXcuZ2V0KCJvdmVybGF5QmFyRWxlbWVudCIpO3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yPWByZ2JhKCR7ZX0sIC4ke3QudmFsdWV9KWAsbnVsbCE9PW8mJihvLnN0eWxlLmJhY2tncm91bmRDb2xvcj1gcmdiYSgke2V9LCAuJHt0LnZhbHVlfSlgKSxuLnRleHRDb250ZW50PWBCcmlnaHRuZXNzIGxldmVsOiAke3QudmFsdWV9YCxOLnNldCgiYnJpZ2h0bmVzcyIscGFyc2VJbnQodC52YWx1ZSkpfSh7b3ZlcmxheUNvbG9yOm4sYnJpZ2h0bmVzc0xldmVsSW5kaWNhdG9yOnIsYnJpZ2h0bmVzc0xldmVsU2xpZGVyOm99KX19KTtEKHtlbGVtZW50TmFtZToiYnV0dG9uIixhcHBlbmRUbzplLGh0bWxQcm9wczp7Y2xhc3NOYW1lOmssdGV4dENvbnRlbnQ6IlNhdmUgYnJpZ2h0bmVzcyBsZXZlbCIsb25jbGljazpVfX0pfX0se25hbWU6IkNoYW5nZSB0aGUgYmx1ciBsZXZlbCIsZXhlY3V0ZShlKXtjb25zdCBuPU4uZ2V0KCJibHVyIiksdD1EKHtlbGVtZW50TmFtZToiaDMiLGFwcGVuZFRvOmUsaHRtbFByb3BzOntjbGFzc05hbWU6eCx0ZXh0Q29udGVudDpgQmx1ciBsZXZlbDogJHtufWB9fSkscj1EKHtlbGVtZW50TmFtZToiaW5wdXQiLGFwcGVuZFRvOmUsaHRtbFByb3BzOntjbGFzc05hbWU6dix0eXBlOiJyYW5nZSIsbWluOiIwIixtYXg6IjUwIix2YWx1ZTpuLnRvU3RyaW5nKCksb25pbnB1dDooKT0+ZnVuY3Rpb24oZSxuKXtjb25zdCB0PXcuZ2V0KCJvdmVybGF5RGFya2VuZXJFbGVtZW50Iikscj13LmdldCgib3ZlcmxheUJhckVsZW1lbnQiKTt0LnN0eWxlLmJhY2tkcm9wRmlsdGVyPWBibHVyKCR7bi52YWx1ZX1weClgLG51bGwhPT1yJiYoci5zdHlsZS5iYWNrZHJvcEZpbHRlcj1gYmx1cigke24udmFsdWV9cHgpYCksZS50ZXh0Q29udGVudD1gQmx1ciBsZXZlbDogJHtuLnZhbHVlfWAsTi5zZXQoImJsdXIiLHBhcnNlSW50KG4udmFsdWUpKX0odCxyKX19KTtEKHtlbGVtZW50TmFtZToiYnV0dG9uIixhcHBlbmRUbzplLGh0bWxQcm9wczp7Y2xhc3NOYW1lOmssdGV4dENvbnRlbnQ6IlNhdmUgYmx1ciBsZXZlbCIsb25jbGljazpLfX0pfX1dO2Z1bmN0aW9uIHooZSxuKXtuLmNsYXNzTGlzdC5hZGQoaCksbi50ZXh0Q29udGVudD0iIjt0cnl7bi5vbmNsaWNrPW51bGwsZS5leGVjdXRlKG4pfWNhdGNoKGUpe2FsZXJ0KFMoZS5tZXNzYWdlKSl9fWNsYXNzIFl7Y29uc3RydWN0b3IoZSl7dGhpcy50YXJnZXRFbGVtZW50PWUsdGhpcy5fb2JzZXJ2ZXI9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoKChlLG4pPT57aWYobnVsbD09PXRoaXMuX2NhbGxiYWNrKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcigiTm8gY2FsbGJhY2sgaGFzIGJlZW4gc3VwcGxpZWQgb24gdHJpZ2dlci4iKTtmb3IoY29uc3QgdCBvZiBlKXtjb25zdCBlPXQudGFyZ2V0O2lmKCJjaGlsZExpc3QiIT09dC50eXBlfHwhZS5jbGFzc0xpc3QuY29udGFpbnMoUi5zbGljZSgxKSl8fG51bGw9PT1lLmZpcnN0Q2hpbGQpcmV0dXJuO3RoaXMuX2NhbGxiYWNrKHQsbil9fSkpfW9uVHJpZ2dlcihlKXtyZXR1cm4gZSYmKHRoaXMuX2NhbGxiYWNrPWUpLHRoaXN9b2JzZXJ2ZShlKXtyZXR1cm4gdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnRhcmdldEVsZW1lbnQsZSksdGhpc311bm9ic2VydmUoKXtyZXR1cm4gdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpLHRoaXN9fWxldCBWO2Z1bmN0aW9uIEcoZSl7aWYoY2xlYXJUaW1lb3V0KFYpLG51bGw9PT1lLnRhcmdldClyZXR1cm47Y29uc3Qgbj1lLnRhcmdldDtpZigiQSIhPT1uLm5vZGVOYW1lfHwhbi5oYXNBdHRyaWJ1dGUoImhyZWYiKXx8IW4uaHJlZi5pbmNsdWRlcygiY2RuLmRpc2NvcmQiKSlyZXR1cm47bGV0IHQ9bnVsbDtjb25zdCByPW5ldyBZKGRvY3VtZW50LmJvZHkpO3RyeXtyLm9uVHJpZ2dlcigoZT0+e2NvbnN0IG89ZS50YXJnZXQ7dD1vLnF1ZXJ5U2VsZWN0b3IoIi5tZW51LTJUWFlqTiIpLG51bGwhPT10JiYibWVudSI9PT10LnJvbGUmJihGKHQsbiksY2xlYXJUaW1lb3V0KFYpLHIudW5vYnNlcnZlKCksVC5kZWxldGUoImNvbnRleHRNZW51Q3JlYXRpb25PYnNlcnZlciIpKX0pKS5vYnNlcnZlKHtzdWJ0cmVlOiEwLGNoaWxkTGlzdDohMH0pfWNhdGNoKGUpe3JldHVybiB2b2lkIGFsZXJ0KFMoZS5tZXNzYWdlKSl9VC5zZXQoImNvbnRleHRNZW51Q3JlYXRpb25PYnNlcnZlciIsciksVj1zZXRUaW1lb3V0KCgoKT0+e3IudW5vYnNlcnZlKCksVC5kZWxldGUoImNvbnRleHRNZW51Q3JlYXRpb25PYnNlcnZlciIpLHQ9ZnVuY3Rpb24oKXtjb25zdCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChSKSk7aWYoMD09PWUubGVuZ3RoKXJldHVybiBudWxsO2Zvcihjb25zdCBuIG9mIGUpe2NvbnN0IGU9bi5xdWVyeVNlbGVjdG9yKCJkaXZbcm9sZT0nbWVudSddIik7aWYobnVsbD09ZT92b2lkIDA6ZS5jbGFzc05hbWUuaW5jbHVkZXMoIm1lbnUiKSlyZXR1cm4gZX1yZXR1cm4gbnVsbH0oKSxudWxsIT09dCYmRih0LG4pfSksNWUzKX1mdW5jdGlvbiBGKGUsbil7Y29uc3QgdD1OLmdldCgiaXNEYXJrVGhlbWUiKTtEKHtlbGVtZW50TmFtZToiYnV0dG9uIixhcHBlbmRUbzplLGh0bWxQcm9wczp7aWQ6Yyx0ZXh0Q29udGVudDokLHN0eWxlOntjb2xvcjp0PyJnb2xkIjoiIzdjNzMwMCIsYm94U2hhZG93OiIwcHggMHB4IDEzcHggMHB4ICIrKHQ/ImhzbCg1MWRlZyAxMDAlIDUwJSAvIDQ1JSkiOiJoc2woNTFkZWcgMTAwJSAyMiUgLyA0NSUpIil9fX0pLm9uY2xpY2s9KCk9Pk8obi5ocmVmKX1mdW5jdGlvbiBxKGUpe2NvbnN0IG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKTtyZXR1cm4gbnVsbD09PW4/KGFsZXJ0KFMoYCR7ZX0gaXMgbm90IGluIHRoZSBET00uYCkpLG51bGwpOm59ZnVuY3Rpb24gaih7bGVnYWN5U3RvcmFnZUtleTplLG5ld1N0b3JhZ2VLZXk6bixkZWZhdWx0VmFsdWU6dH0pe3RyeXtsZXQgcj13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obik7cmV0dXJuIG51bGw9PT1yJiYocj13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oZSksbnVsbD09PXI/cj10Oih3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZSksd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKG4scikpKSwhMH1jYXRjaChlKXtyZXR1cm4gYWxlcnQoUyhlLm1lc3NhZ2UpKSwhMX19Y2xhc3MgWHtjb25zdHJ1Y3Rvcih7dGFyZ2V0RWxlbWVudDplLGZyb206bix0bzp0fSl7dGhpcy5fY2FsbGJhY2s9bnVsbCx0aGlzLnRhcmdldEVsZW1lbnQ9ZSx0aGlzLl9mcm9tPW4sdGhpcy5fdG89dCx0aGlzLl93YXNDbGFzc05hbWVQcmV2aW91c2x5UHJlc2VudD0hdGhpcy50YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLl9mcm9tKSYmdGhpcy50YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLl90byksdGhpcy5fb2JzZXJ2ZXI9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoKChlLG4pPT57aWYobnVsbD09PXRoaXMuX2NhbGxiYWNrKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcigiTm8gY2FsbGJhY2sgaGFzIGJlZW4gc3VwcGxpZWQgb24gY2xhc3MgY2hhbmdlLiIpO2Zvcihjb25zdCB0IG9mIGUpe2lmKCJhdHRyaWJ1dGVzIiE9PXQudHlwZXx8ImNsYXNzIiE9PXQuYXR0cmlidXRlTmFtZSljb250aW51ZTtjb25zdCBlPXQudGFyZ2V0LHI9IWUuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuX2Zyb20pJiZlLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLl90byk7ciE9PXRoaXMuX3dhc0NsYXNzTmFtZVByZXZpb3VzbHlQcmVzZW50JiYodGhpcy5fd2FzQ2xhc3NOYW1lUHJldmlvdXNseVByZXNlbnQ9cix0aGlzLl9jYWxsYmFjayh0LG4pKX19KSl9b25UcmlnZ2VyKGUpe3JldHVybiB0aGlzLl9jYWxsYmFjaz1lLHRoaXN9b2JzZXJ2ZShlKXtyZXR1cm4gdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnRhcmdldEVsZW1lbnQsZSksdGhpc311bm9ic2VydmUoKXtyZXR1cm4gdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpLHRoaXN9fWZ1bmN0aW9uIFooKXtjb25zdCBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHIpLG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocyksdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChvKSxpPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpLGM9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobCk7aWYobnVsbD09bnx8bi5yZW1vdmUoKSxudWxsPT10fHx0LnJlbW92ZSgpLG51bGw9PWl8fGkucmVtb3ZlKCksbnVsbD09Y3x8Yy5yZW1vdmUoKSxudWxsIT09ZSYmKHdpbmRvdy5vbmtleWRvd249bnVsbCxlLnJlbW92ZSgpKSx3aW5kb3cuX19UUkFOU1BBUkVOQ1lfT0JTRVJWRVJTX18pe2Zvcihjb25zdCBlIG9mIHdpbmRvdy5fX1RSQU5TUEFSRU5DWV9PQlNFUlZFUlNfXy52YWx1ZXMoKSllLnVub2JzZXJ2ZSgpO3dpbmRvdy5fX1RSQU5TUEFSRU5DWV9PQlNFUlZFUlNfXz12b2lkIDB9fSFmdW5jdGlvbigpe2lmKFooKSwhKGZ1bmN0aW9uKCl7Y29uc3QgZT1EKHtlbGVtZW50TmFtZToiaWZyYW1lIixhcHBlbmRUbzpkb2N1bWVudC5ib2R5LGh0bWxQcm9wczp7fX0pO3JldHVybiBlLnN0eWxlLmRpc3BsYXk9Im5vbmUiLG51bGw9PT1lLmNvbnRlbnRXaW5kb3c/KGFsZXJ0KFMoIkNvdWxkIG5vdCBjcmVhdGUgdGhlIGxvY2FsU3RvcmFnZSBvYmplY3QgYmVjYXVzZSB0aGUgaWZyYW1lJ3MgY29udGVudFdpbmRvdyBpc24ndCBkZWZpbmVkLiIpKSwhMSk6KHdpbmRvdy5sb2NhbFN0b3JhZ2U9ZS5jb250ZW50V2luZG93LmxvY2FsU3RvcmFnZSwhMCl9KCkmJmooe2xlZ2FjeVN0b3JhZ2VLZXk6ImJnSW1nIixuZXdTdG9yYWdlS2V5OmUsZGVmYXVsdFZhbHVlOiIifSkmJmooe2xlZ2FjeVN0b3JhZ2VLZXk6ImJyZ2h0bnMiLG5ld1N0b3JhZ2VLZXk6bixkZWZhdWx0VmFsdWU6IjkifSkpfHwoTi5zZXQoImlzRGFya1RoZW1lIixkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHUpKS5zZXQoImJyaWdodG5lc3MiLHBhcnNlSW50KG51bGwhPT0oaT13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obikpJiZ2b2lkIDAhPT1pP2k6InVuc2V0Iil8fDkpLnNldCgiYmx1ciIscGFyc2VJbnQobnVsbCE9PShjPXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0KSkmJnZvaWQgMCE9PWM/YzoidW5zZXQiKXx8MCkuc2V0KCJiYWNrZ3JvdW5kSW1hZ2VVUkwiLG51bGwhPT0obT13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oZSkpJiZ2b2lkIDAhPT1tP206IiIpLDApfHwhZnVuY3Rpb24oKXtjb25zdCBlPU4uZ2V0KCJpc0RhcmtUaGVtZSIpLG49bmV3IFgoe3RhcmdldEVsZW1lbnQ6ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGZyb206ZT91OmQsdG86ZT9kOnV9KTt0cnl7bi5vblRyaWdnZXIoKCgpPT57SCh7dGV4dDoi8J+bkSBJdCBsb29rcyB0aGUgdGhlbWUgY2hhbmdlZC4gRGlzY29yZCB3aWxsIHJlZnJlc2ggaW4gNSBzZWNvbmRzLiIsdGltZW91dDo1ZTN9KS50aGVuKCgoKT0+e24udW5vYnNlcnZlKCksbG9jYXRpb24ucmVsb2FkKCl9KSl9KSkub2JzZXJ2ZSh7YXR0cmlidXRlczohMCxhdHRyaWJ1dGVGaWx0ZXI6WyJjbGFzcyJdfSl9Y2F0Y2goZSl7cmV0dXJuIGFsZXJ0KFMoZS5tZXNzYWdlKSksITF9cmV0dXJuIFQuc2V0KCJ0aGVtZUNoYW5nZU9ic2VydmVyIixuKSwhMH0oKXx8KHdpbmRvdy5fX1RSQU5TUEFSRU5DWV9PQlNFUlZFUlNfXz1ULDApfHwhZnVuY3Rpb24oKXtjb25zdCBlPXEoSSk7aWYobnVsbD09PWUpcmV0dXJuITE7Y29uc3Qgbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKEMpLHQ9RCh7ZWxlbWVudE5hbWU6InN0eWxlIixhcHBlbmRUbzpkb2N1bWVudC5oZWFkLGh0bWxQcm9wczp7aWQ6cixpbm5lckhUTUw6TSgpfX0pO3JldHVybiB3LnNldCgib3ZlcmxheUJhckVsZW1lbnQiLG4pLnNldCgib3ZlcmxheURhcmtlbmVyRWxlbWVudCIsZSkuc2V0KCJtYWluU3R5bGVTaGVldCIsdCksITB9KCkpcmV0dXJuIHZvaWQgWigpO3ZhciBpLGMsbTtEKHtlbGVtZW50TmFtZToic3R5bGUiLGFwcGVuZFRvOmRvY3VtZW50LmhlYWQsaHRtbFByb3BzOntpZDpzLGlubmVySFRNTDpQfX0pO2NvbnN0e2FjdGlvbnNQYW5lbDpwLHRvZ2dsZUFjdGlvbnNQYW5lbDpofT1mdW5jdGlvbigpe2NvbnN0IGU9RCh7ZWxlbWVudE5hbWU6ImRpdiIsYXBwZW5kVG86ZG9jdW1lbnQuYm9keSxodG1sUHJvcHM6e2lkOm99fSksbj1EKHtlbGVtZW50TmFtZToiZGl2IixhcHBlbmRUbzpkb2N1bWVudC5ib2R5LGh0bWxQcm9wczp7aWQ6YX19KSx0PWZ1bmN0aW9uKGUsbil7Y29uc3QgdD13LmdldCgibWFpblN0eWxlU2hlZXQiKTtsZXQgcjtyZXR1cm4gZnVuY3Rpb24oKXtjb25zdCBvPWUuY2xhc3NMaXN0LmNvbnRhaW5zKGcpLGE9dC5oYXNBdHRyaWJ1dGUoIm1lZGlhIik7aWYoY2xlYXJUaW1lb3V0KHIpLCFvJiYhYSlyZXR1cm4gZS5zdHlsZS5kaXNwbGF5PSJibG9jayIsbi5zdHlsZS5kaXNwbGF5PSJibG9jayIsdm9pZCBzZXRUaW1lb3V0KCgoKT0+ZS5jbGFzc0xpc3QuYWRkKGcpKSwyMCk7byYmKGUuY2xhc3NMaXN0LnJlbW92ZShnKSxuLnN0eWxlLmRpc3BsYXk9Im5vbmUiLHI9c2V0VGltZW91dCgoKCk9PntlLnN0eWxlLmRpc3BsYXk9Im5vbmUifSksMWUzKSl9fShlLG4pO24ub25jbGljaz10LEQoe2VsZW1lbnROYW1lOiJzdHlsZSIsYXBwZW5kVG86ZG9jdW1lbnQuaGVhZCxodG1sUHJvcHM6e2lkOmwsaW5uZXJIVE1MOkx9fSksbnVsbCE9PXcuZ2V0KCJvdmVybGF5QmFyRWxlbWVudCIpJiYoZS5zdHlsZS5wYWRkaW5nVG9wPSIyMHB4Iik7Zm9yKGNvbnN0IG4gb2YgVyl7Y29uc3QgdD1EKHtlbGVtZW50TmFtZToiZGl2IixhcHBlbmRUbzplLGh0bWxQcm9wczp7Y2xhc3NOYW1lOmIsdGV4dENvbnRlbnQ6bi5uYW1lfX0pO3Qub25jbGljaz0oKT0+eihuLHQpfXJldHVybnthY3Rpb25zUGFuZWw6ZSx0b2dnbGVBY3Rpb25zUGFuZWw6dH19KCk7SCh7dGV4dDoiV2VsY29tZSEgPGJyPjxicj5UbyB0b2dnbGUgdGhlIGFjdGlvbnMgcGFuZWwsIHByZXNzIDxiPkNUUkwgKyBTSElGVCArIFg8L2I+PGJyPlRvIHRvZ2dsZSB0aGUgdGhlbWUsIHByZXNzIDxiPkNUUkwgKyBEPC9iPiIsdGltZW91dDoxZTQsY29udGFpbnNIVE1MOiEwfSkudGhlbigoKCk9PnsoZnVuY3Rpb24oKXtjb25zdCBlPU4uZ2V0KCJpc0RhcmtUaGVtZSIpLG49dy5nZXQoIm92ZXJsYXlCYXJFbGVtZW50Iik7aWYobnVsbCE9PW4pcmV0dXJuIWUmJm4uY2xhc3NMaXN0LmNvbnRhaW5zKHUpO2NvbnN0IHQ9cSgiLmJnLTFRSUF1cyIpO3JldHVybiBudWxsIT09dCYmIWUmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKHUpfSkoKSYmKEgoe3RleHQ6IjxiPvCfm5EgV2FybmluZzwvYj48YnI+PGJyPllvdXIgc2lkZWJhciBpcyBjdXJyZW50bHkgZGFyayB0aGVtZWQuPGJyPkZvciBwcm9wZXIgdGV4dCB2aXNpYmlsaXR5LCBkaXNhYmxlIGl0cyBkYXJrIHRoZW1lIGluIFNldHRpbmdzID4gQXBwZWFyYW5jZS48YnI+PGJyPlRoZSB0aGVtZSBoYXMgZGlzYWJsZWQgaXRzZWxmLiBBZnRlciBkaXNhYmxpbmcgdGhlIHNpZGViYXIncyBkYXJrIHRoZW1lLCB5b3UgY2FuIHJlYWN0aXZhdGUgdGhlIHRoZW1lIGJ5IHByZXNzaW5nIDxiPkNUUkwgKyBEPC9iPi4gPHU+Tm8gbmVlZCB0byByZWZyZXNoPC91Pi4iLHRpbWVvdXQ6MTVlMyxjb250YWluc0hUTUw6ITB9KSxFKHApKX0pKSx3aW5kb3cub25rZXlkb3duPWU9PntlLmN0cmxLZXkmJihlLnNoaWZ0S2V5JiYiS2V5WCI9PT1lLmNvZGUmJihlLnByZXZlbnREZWZhdWx0KCksaCgpKSwiS2V5RCI9PT1lLmNvZGUmJihlLnByZXZlbnREZWZhdWx0KCksRShwKSkpfSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigiY29udGV4dG1lbnUiLEcse2NhcHR1cmU6ITB9KX0oKX0pKCk7",
            "base64"
          ).toString("utf8")
        );
      });
      